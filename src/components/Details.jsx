import classes from '../styles/Details.module.css';

import { Link, useParams } from 'react-router-dom';

import data from '../../data.json';

import { useSelector } from 'react-redux';

const Details = () => {
    const { cca3 } = useParams();

    const theme = useSelector((state) => state.ui.theme);

    const getCountry = data.filter((country) => country.alpha3Code === cca3)[0];

    let borders = getCountry.borders;

    const getBorders = borders == undefined ? (borders = []) : borders;

    const getBorderNames =
        getBorders == []
            ? getBorders
            : getBorders.map((border) => {
                  return data.filter((country) => country.alpha3Code.includes(border))[0].name;
              });

    return (
        <div className={`${classes.detailsContainer} ${theme === 'dark' ? classes.dark : classes.light}`}>
            <div className={classes.backBtn}>
                <Link to="/">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z" />
                        </svg>
                        Back
                    </button>
                </Link>
            </div>
            <div className={classes.content}>
                <div className={classes.imgContainer}>
                    <img src={getCountry.flags.png} alt="" />
                </div>
                <div className={classes.details}>
                    <h1>{getCountry.name}</h1>
                    <div className={classes.detail}>
                        <div>
                            <p>
                                Native Name: <span>{getCountry.nativeName}</span>
                            </p>
                            <p>
                                Population: <span>{getCountry.population.toLocaleString()}</span>
                            </p>
                            <p>
                                Region: <span>{getCountry.region}</span>
                            </p>
                            <p>
                                Sub Region: <span>{getCountry.subregion}</span>
                            </p>
                            <p>
                                Capital: <span>{getCountry.capital}</span>
                            </p>
                        </div>
                        <div>
                            <p>
                                Top Level Domain: <span>{getCountry.topLevelDomain}</span>
                            </p>
                            <p>
                                Currencies: <span>{getCountry.currencies[0].name}</span>
                            </p>
                            <p>
                                Languages:{' '}
                                <span>
                                    {getCountry.languages.map((language) => (
                                        <span key={language.name}>{language.name},</span>
                                    ))}
                                </span>
                            </p>
                        </div>
                    </div>
                    {getBorders.length !== 0 && (
                        <div className={classes.bdrCountries}>
                            <p>
                                Border Countries:
                                <span>
                                    {getBorders.map((border, index) => (
                                        <Link to={`/country/${getBorders[index]}`} key={index}>
                                            <button>{getBorderNames[index]}</button>
                                        </Link>
                                    ))}
                                </span>
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
export default Details;

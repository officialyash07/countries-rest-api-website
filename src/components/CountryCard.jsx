/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import classes from '../styles/CountryCard.module.css';

import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

const CountryCard = ({ country }) => {
    const theme = useSelector((state) => state.ui.theme);

    return (
        <div className={`${classes.countryCard} ${theme === 'dark' ? classes.dark : classes.light}`}>
            <div className={classes.flag}>
                <Link to={`/country/${country.cca3}`}>
                    <img src={country.flags.png} alt="" />
                </Link>
            </div>
            <div className={classes.content}>
                <h3>{country.name.common}</h3>
                <p>
                    Population: <span>{country.population.toLocaleString()}</span>
                </p>
                <p>
                    Region: <span>{country.region}</span>
                </p>
                <p>
                    Capital: <span>{country.capital}</span>
                </p>
            </div>
        </div>
    );
};
export default CountryCard;

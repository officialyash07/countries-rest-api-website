/* eslint-disable react/prop-types */
import classes from '../styles/Countries.module.css';

import CountryCard from './CountryCard';

import { useState, useEffect } from 'react';

const Countries = ({ selectedRegion, input }) => {
    const [loadedCountry, setLoadedCountry] = useState([]);

    const [error, setError] = useState(false);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchCountries() {
            try {
                const response = await fetch(
                    `https://restcountries.com/v3.1/${selectedRegion === 'all' ? 'all' : `region/${selectedRegion}`}`
                );
                const countries = await response.json();
                setLoadedCountry(countries);
            } catch (error) {
                setError(true);
            }
            setIsLoading(false);
        }
        fetchCountries();
    }, [selectedRegion]);

    const filteredCountries = loadedCountry.filter((country) =>
        country.name.common.toLowerCase().includes(input.toLowerCase())
    );
    // console.log(filteredCountries);
    return (
        <div className={classes.countryContainer}>
            {isLoading && (
                <p className={classes.loading}>
                    Fetching data <span>...</span>
                </p>
            )}
            {error && (
                <p className={classes.error}>
                    Failed to fetch data<span>...</span>
                </p>
            )}
            {filteredCountries.map((country) => (
                <CountryCard
                    key={country.name.common}
                    country={country}
                    alpha3Code={country.alpha3Code}
                    loadedCountry={loadedCountry}
                />
            ))}
        </div>
    );
};
export default Countries;

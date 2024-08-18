/* eslint-disable react/prop-types */
import classes from '../styles/Regions.module.css';

import ArrowDown from '../assets/ArrowDown';

import { useState } from 'react';

import { useSelector } from 'react-redux';

const Regions = ({ onRegionSelect, selectedRegion }) => {
    const [isOpen, setIsOpen] = useState(false);

    const theme = useSelector((state) => state.ui.theme);

    const handleToggleRegion = () => {
        setIsOpen(!isOpen);
    };

    const handleClick = (value) => {
        onRegionSelect(value);
        setIsOpen(false);
    };

    return (
        <div className={classes.regionContainer}>
            <div
                className={`${classes.selects} ${theme === 'dark' ? classes.dark : classes.light}`}
                onClick={handleToggleRegion}
            >
                <p>{selectedRegion === 'all' ? 'Filter by Region' : selectedRegion}</p>
                <span>
                    <ArrowDown />
                </span>
            </div>
            <div
                className={`${classes.options} ${theme === 'dark' ? classes.darkOptions : classes.lightOptions} ${
                    isOpen ? classes.open : classes.close
                }`}
            >
                {selectedRegion !== 'all' && <p onClick={() => handleClick('all')}>Filter by Region</p>}
                <p onClick={() => handleClick('africa')}>Africa</p>
                <p onClick={() => handleClick('america')}>America</p>
                <p onClick={() => handleClick('asia')}>Asia</p>
                <p onClick={() => handleClick('europe')}>Europe</p>
                <p onClick={() => handleClick('oceania')}>Oceania</p>
            </div>
        </div>
    );
};
export default Regions;

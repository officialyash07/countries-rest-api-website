import classes from '../styles/HomePage.module.css';

import Search from '../components/Search';
import Regions from '../components/Regions';
import Countries from '../components/Countries';

import { useState } from 'react';

const HomePage = () => {
    const [selectRegion, setSelectRegion] = useState('all');

    const [searchInput, setSearchInput] = useState('');

    return (
        <div id={classes.homePage}>
            <div className={classes.homeHeader}>
                <Search input={searchInput} onChange={setSearchInput} />
                <Regions onRegionSelect={setSelectRegion} selectedRegion={selectRegion} />
            </div>
            <Countries selectedRegion={selectRegion} input={searchInput} />
        </div>
    );
};
export default HomePage;

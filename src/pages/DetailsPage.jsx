/* eslint-disable react/prop-types */
import classes from '../styles/DetailsPage.module.css';

import Details from '../components/Details';

const DetailsPage = () => {
    return (
        <div id={classes.detailsPage}>
            <Details />
        </div>
    );
};
export default DetailsPage;

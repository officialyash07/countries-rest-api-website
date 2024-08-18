import classes from '../styles/RootPage.module.css';

import { Outlet } from 'react-router';

import Header from '../components/Header';

import { useSelector } from 'react-redux';

const RootPage = () => {
    const theme = useSelector((state) => state.ui.theme);

    return (
        <div id={classes.rootPage} className={theme === 'dark' ? classes.dark : classes.light}>
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    );
};
export default RootPage;

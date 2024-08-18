import classes from '../styles/Header.module.css';

import Light from '../assets/Light';
import Dark from '../assets/Dark';

import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../store/uiSlice';

const Header = () => {
    const dispatch = useDispatch();

    const theme = useSelector((state) => state.ui.theme);
    console.log(theme);

    const handleToggleTheme = () => {
        dispatch(uiActions.toggleTheme());
    };

    return (
        <header className={`${classes.header} ${theme === 'dark' ? classes.dark : classes.light}`}>
            <h2>Where in the world?</h2>
            <div>
                <button onClick={handleToggleTheme}>
                    <span>{theme === 'dark' ? <Light /> : <Dark />}</span>
                    {theme === 'dark' ? (
                        <p className={classes.lightText}>Light Mode</p>
                    ) : (
                        <p className={classes.darkText}>Dark Mode</p>
                    )}
                </button>
            </div>
        </header>
    );
};
export default Header;

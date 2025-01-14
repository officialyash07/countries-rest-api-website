import uiReducer from './uiSlice';

import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: { ui: uiReducer },
});

export default store;

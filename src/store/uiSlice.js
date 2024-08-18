import { createSlice } from '@reduxjs/toolkit';

const initialState = { theme: 'dark' };

const uiSlice = createSlice({
    name: 'ui',
    initialState: initialState,
    reducers: {
        toggleTheme(state) {
            if (state.theme === 'dark') {
                state.theme = 'light';
            } else {
                state.theme = 'dark';
            }
        },
    },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;

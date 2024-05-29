import { createSlice } from '@reduxjs/toolkit';

const initialValue = {
    dataHistory: [],
};

const historyMusicSlice = createSlice({
    name: 'history',
    initialState: initialValue,
    reducers: {
        addMusicToHistory: (state, action) => {
            state.dataHistory.unshift(action.payload);
        },
    },
});

const { actions } = historyMusicSlice;
export const { addMusicToHistory } = actions;
export default historyMusicSlice;

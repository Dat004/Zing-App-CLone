import { createSlice } from "@reduxjs/toolkit";

const initValue = {
    isShuffle: false,
    repeatMode: 'none'
};

const filterPlaylistSlice = createSlice({
    name: 'filter',
    initialState: initValue,
    reducers: {
        setIsShuffle: (state, action) => {
            state.isShuffle = action.payload;
        },
        setModeRepeat: (state, action) => {
            state.repeatMode = action.payload;
        }
    }
});

const { actions } = filterPlaylistSlice;
export const { setIsShuffle, setModeRepeat } = actions;
export default filterPlaylistSlice;
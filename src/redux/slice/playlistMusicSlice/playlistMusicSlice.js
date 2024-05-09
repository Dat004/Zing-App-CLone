import { createSlice } from '@reduxjs/toolkit';

const initialValue = [];

const playlistMusicSlice = createSlice({
    name: 'playlist',
    initialState: initialValue,
    reducers: {
        addMusic: (state, action) => {},
        removeMusic: (state, action) => {},
    },
});

const { actions } = playlistMusicSlice;

export const { addMusic, removeMusic } = actions;
export default playlistMusicSlice;

import { createSlice } from '@reduxjs/toolkit';

const initValue = {
    musics: {
        isPlaying: false,
        isFetching: false,
        isSeeked: false,
        isError: false,
        currentSrc: '',
        currentTime: 0,
    },
    sounds: {
        muted: false,
        currentSound: 1,
    },
};

const musicSlice = createSlice({
    name: 'music',
    initialState: initValue,
    reducers: {
        onFetchingMusic: (state, action) => {
            state.musics.isFetching = action.payload;
        },
        onPlayingMusic: (state, action) => {
            state.musics.isPlaying = action.payload;
        },
        onSeekedMusic: (state, action) => {
            state.musics.isSeeked = action.payload;
        },
        onErrorMusic: (state, action) => {
            state.musics.isError = action.payload;
        },
        onChangeSrcCurrentSrc: (state, action) => {
            state.musics.currentSrc = action.payload;
        },
        onDeleteCurrentSrc: (state) => {
            state.musics.currentSrc = '';
        },
        onChangeCurrentTime: (state, action) => {
            state.musics.currentTime = action.payload;
        },
        onSoundChanges: (state, action) => {
            const { muted, currentSound } = action.payload;

            state.sounds.muted = muted;
            state.sounds.currentSound = currentSound;
        },
    },
});

const { actions } = musicSlice;

export const {
    onFetchingMusic,
    onPlayingMusic,
    onSeekedMusic,
    onErrorMusic,
    onSoundChanges,
    onChangeSrcCurrentSrc,
    onDeleteCurrentSrc,
    onChangeCurrentTime,
} = actions;
export default musicSlice;

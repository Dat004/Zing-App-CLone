import { playlistMusicSlice, historyMusicSlice } from '../slice';

const reducers = {
    playlistMusic: playlistMusicSlice.reducer,
    historyMusic: historyMusicSlice.reducer,
};

export default reducers;

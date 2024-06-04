import { playlistMusicSlice, historyMusicSlice, musicSlice, filterPlaylistSlice } from '../slice';

const reducers = {
    playlistMusic: playlistMusicSlice.reducer,
    historyMusic: historyMusicSlice.reducer,
    filterPlaylist: filterPlaylistSlice.reducer,
    music: musicSlice.reducer,
};

export default reducers;

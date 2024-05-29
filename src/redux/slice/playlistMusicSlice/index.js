import { createSlice } from '@reduxjs/toolkit';

const initialValue = {
    dataPlaylist: {
        informationPlaylist: {},
        itemsPlaylist: [],
        encodeId: '',
    },
    currentMusicOfPlaylist: {
        currentIndexMusic: 0,
        currentDataMusic: {},
    },
};

const playlistMusicSlice = createSlice({
    name: 'playlist',
    initialState: initialValue,
    reducers: {
        addPlaylist: (state, action) => {
            const { itemsPlaylist, informationPlaylist } = action.payload;

            state.dataPlaylist.itemsPlaylist.push(...itemsPlaylist);
            state.dataPlaylist.informationPlaylist = { ...informationPlaylist };
        },
        addMusicToPlaylist: (state, action) => {
            const { itemsPlaylist, encodeId } = action.payload;

            state.dataPlaylist.encodeId = encodeId ?? "";
            state.dataPlaylist.itemsPlaylist.push(...itemsPlaylist);
        },
        removePlaylist: (state) => {
            state.dataPlaylist.itemsPlaylist.splice(0);
            state.dataPlaylist.informationPlaylist = {};
            state.currentMusicOfPlaylist.currentDataMusic = {};
            state.currentMusicOfPlaylist.currentIndexMusic = 0;
        },
        removeMusicFromPlaylist: (state, action) => {
            state.dataPlaylist.itemsPlaylist.splice(action.payload, 1);
        },
        updateCurrentMusic: (state, action) => {
            const { index, music } = action.payload;

            state.currentMusicOfPlaylist.currentIndexMusic = index;
            state.currentMusicOfPlaylist.currentDataMusic = { ...music };
        },
    },
});

const { actions } = playlistMusicSlice;

export const { addPlaylist, addMusicToPlaylist, removePlaylist, removeMusicFromPlaylist, updateCurrentMusic } = actions;
export default playlistMusicSlice;

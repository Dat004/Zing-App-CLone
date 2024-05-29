import { createSelector } from '@reduxjs/toolkit';

export const playlistSelector = (state) => state.playlistMusic;
export const historySelector = (state) => state.historyMusic;

export const playlistRemainingSelector = createSelector(playlistSelector, (playlist) => ({
    ...playlist,
    isHasPlaylist: !!playlist.dataPlaylist.itemsPlaylist.length,
}));

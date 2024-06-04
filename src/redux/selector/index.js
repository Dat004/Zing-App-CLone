import { createSelector } from '@reduxjs/toolkit';

const playlistSelector = (state) => state.playlistMusic;
const filterPlaylistSelector = (state) => state.filterPlaylist;
export const historySelector = (state) => state.historyMusic;
export const musicSelector = (state) => state.music;

export const playlistRemainingSelector = createSelector(
    playlistSelector,
    filterPlaylistSelector,
    (playlist, filterPlaylist) => {
        const currentMusicOfPlaylist = playlist.currentMusicOfPlaylist;
        const dataPlaylist = playlist.dataPlaylist;
        const { itemsPlaylist } = dataPlaylist;

        let prevShuffleData = null;

        if (filterPlaylist.isShuffle) {
            const shufflePlaylist = dataPlaylist.itemsPlaylist.map((_, index) => index);

            function shuffleArray(array) {
                for (var i = array.length - 1; i > 0; i--) {
                    // Generate random number
                    var j = Math.floor(Math.random() * (i + 1));

                    var temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                }

                return array;
            }

            prevShuffleData = shuffleArray(shufflePlaylist).map((items) => itemsPlaylist[items]);
        }

        return {
            dataPlaylist: {
                ...dataPlaylist,
                itemsPlaylist: filterPlaylist.isShuffle ? prevShuffleData : itemsPlaylist,
                repeatMode: filterPlaylist.repeatMode,
            },
            currentMusicOfPlaylist,
            isHasPlaylist: !!dataPlaylist.itemsPlaylist.length,
        };
    },
);

import { useDispatch, useSelector } from 'react-redux';

import { playlistRemainingSelector } from '../../selector';
import { addMusicToHistory } from '../../slice/historyMusicSlice';
import {
    addPlaylist,
    addMusicToPlaylist,
    removePlaylist,
    removeMusicFromPlaylist,
    updateCurrentMusic,
} from '../../slice/playlistMusicSlice';

const MusicActions = () => {
    const dispatch = useDispatch();
    const playlistMusicData = useSelector(playlistRemainingSelector);
    
    const { itemsPlaylist } = playlistMusicData.dataPlaylist;
    const { currentIndexMusic, currentDataMusic } = playlistMusicData.currentMusicOfPlaylist;

    const ADD_PLAYLIST = (data = [], index = 0, informationPlaylist = {}) => {
        dispatch(removePlaylist());
        dispatch(
            updateCurrentMusic({
                music: data[index],
                index,
            }),
        );
        dispatch(
            addPlaylist({
                itemsPlaylist: data,
                informationPlaylist: informationPlaylist,
            }),
        );
    };

    const ADD_MUSIC_TO_PLAYLIST = (data = [], encodeId = '') => {
        if (itemsPlaylist.length === 0) {
            dispatch(
                updateCurrentMusic({
                    music: data[0],
                    index: 0,
                }),
            );
        }
        dispatch(
            addMusicToPlaylist({
                itemsPlaylist: data,
                encodeId,
            }),
        );
    };
    const ADD_MUSIC_TO_HISTORY = () => {
        if (Object.keys(currentDataMusic).length === 0) {
            return;
        }
        
        dispatch(addMusicToHistory(currentDataMusic));
    };

    const REMOVE_PLAYLIST = () => {
        dispatch(removePlaylist());
    };

    const REMOVE_MUSIC_FROM_PLAYLIST = (index = 0) => {
        dispatch(removeMusicFromPlaylist(index));
    };

    const UPDATE_CURRENT_PLAYLIST_MUSIC = (index = 0, currentMusic = {}) => {
        dispatch(
            updateCurrentMusic({
                index,
                music: currentMusic,
            }),
        );
    };

    const NEXTMUSIC = () => {
        dispatch(
            updateCurrentMusic({
                index: currentIndexMusic + 1,
                music: itemsPlaylist[currentIndexMusic + 1],
            }),
        );
    };

    const PREVMUSIC = () => {
        dispatch(
            updateCurrentMusic({
                index: currentIndexMusic - 1,
                music: itemsPlaylist[currentIndexMusic - 1],
            }),
        );
    };

    return {
        ADD_PLAYLIST,
        ADD_MUSIC_TO_PLAYLIST,
        ADD_MUSIC_TO_HISTORY,
        REMOVE_PLAYLIST,
        REMOVE_MUSIC_FROM_PLAYLIST,
        UPDATE_CURRENT_PLAYLIST_MUSIC,
        NEXTMUSIC,
        PREVMUSIC,
    };
};

export default MusicActions;

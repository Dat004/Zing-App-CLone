import { useDispatch, useSelector } from 'react-redux';

import { setIsShuffle, setModeRepeat } from '../../slice/playlistMusicSlice/filterPlaylistSlice'; 
import { addMusicToHistory } from '../../slice/historyMusicSlice';
import { playlistRemainingSelector } from '../../selector';
import {
    onPlayingMusic,
    onFetchingMusic,
    onSeekedMusic,
    onErrorMusic,
    onChangeSrcCurrentSrc,
    onDeleteCurrentSrc,
    onChangeCurrentTime,
    onSoundChanges,
} from '../../slice/musicSlice';
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
        ADD_MUSIC_TO_HISTORY();
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
        ADD_MUSIC_TO_HISTORY();
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
        ADD_MUSIC_TO_HISTORY();
    };

    const NEXTMUSIC = () => {
        dispatch(
            updateCurrentMusic({
                index: currentIndexMusic + 1,
                music: itemsPlaylist[currentIndexMusic + 1],
            }),
        );
        ADD_MUSIC_TO_HISTORY();
    };

    const PREVMUSIC = () => {
        dispatch(
            updateCurrentMusic({
                index: currentIndexMusic - 1,
                music: itemsPlaylist[currentIndexMusic - 1],
            }),
        );
        ADD_MUSIC_TO_HISTORY();
    };

    const ON_FETCHING_MUSIC = (state) => {
        dispatch(onFetchingMusic(state));
    };

    const ON_PLAYING_MUSIC = (state) => {
        dispatch(onPlayingMusic(state));
    };

    const ON_SEEKED_MUSIC = (state) => {
        dispatch(onSeekedMusic(state));
    };

    const ON_ERROR_MUSIC = (state) => {
        dispatch(onErrorMusic(state));
    };

    const ON_CHANGE_CURRENT_SRC = (src) => {
        dispatch(onChangeSrcCurrentSrc(src));
    };

    const ON_DELETE_CURRENT_SRC = () => {
        dispatch(onDeleteCurrentSrc());
    };

    const ON_CHANGE_CURRENT_TIME = (currentTime) => {
        dispatch(onChangeCurrentTime(currentTime));
    };

    const ON_CHANGE_SOUND = (currentSound) => {
        const value = {
            muted: currentSound === 0 ? true : false,
            currentSound,
        };

        dispatch(onSoundChanges(value));
    };

    const SET_IS_SHUFFLE = (state) => {
        dispatch(setIsShuffle(state));
    };

    const SET_MODE_REPEAT = (state) => {
        dispatch(setModeRepeat(state));
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
        ON_FETCHING_MUSIC,
        ON_PLAYING_MUSIC,
        ON_SEEKED_MUSIC,
        ON_ERROR_MUSIC,
        ON_CHANGE_CURRENT_SRC,
        ON_DELETE_CURRENT_SRC,
        ON_CHANGE_CURRENT_TIME,
        ON_CHANGE_SOUND,
        SET_IS_SHUFFLE,
        SET_MODE_REPEAT,
    };
};

export default MusicActions;

import { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';

import MusicActions from '../../../redux/actions/MusicActions';
import { musicSelector } from '../../../redux/selector';
import apiService from '../../../services';

function AudioApp({ data = {} }) {
    const audioRef = useRef();
    const musicState = useSelector(musicSelector);

    const {
        NEXTMUSIC,
        UPDATE_CURRENT_PLAYLIST_MUSIC,
        ON_PLAYING_MUSIC,
        ON_FETCHING_MUSIC,
        ON_ERROR_MUSIC,
        ON_CHANGE_CURRENT_SRC,
        ON_DELETE_CURRENT_SRC,
        ON_CHANGE_CURRENT_TIME,
    } = MusicActions();
    const { isPlaying, isFetching, isSeeked, isError, currentSrc, currentTime } = musicState.musics;
    const { currentDataMusic, currentIndexMusic } = data.currentMusicOfPlaylist;
    const { repeatMode, itemsPlaylist } = data.dataPlaylist;
    const { currentSound, muted } = musicState.sounds;
    const { encodeId } = currentDataMusic;

    useEffect(() => {
        if (!!!encodeId) {
            return;
        }

        (async () => {
            ON_FETCHING_MUSIC(true);
            ON_PLAYING_MUSIC(false);
            ON_ERROR_MUSIC(false);
            ON_DELETE_CURRENT_SRC();

            const data = await apiService.musicApi(encodeId);

            if (data.Error?.isError) {
                ON_FETCHING_MUSIC(false);
                ON_ERROR_MUSIC(true);

                return;
            }

            if (data.data?.err === -1110) {
                ON_FETCHING_MUSIC(false);
                ON_ERROR_MUSIC(true);

                return;
            }

            ON_CHANGE_CURRENT_SRC(data.data?.data[128]);
            ON_CHANGE_CURRENT_TIME(0);
            ON_FETCHING_MUSIC(false);
            ON_PLAYING_MUSIC(true);
            ON_ERROR_MUSIC(false);
        })();
    }, [encodeId]);

    useEffect(() => {
        if (audioRef.current) {
            if (isPlaying) {
                const audioPromise = audioRef.current.play();

                if (audioPromise !== undefined) {
                    audioPromise
                        .then(() => {})
                        .catch((err) => {
                            ON_PLAYING_MUSIC(false);
                        });
                }
            }
            if (!isPlaying || isFetching) audioRef.current.pause();
        }
    }, [isPlaying, isFetching]);

    useEffect(() => {
        if (audioRef.current && isSeeked) {
            audioRef.current.currentTime = currentTime;
        }
    }, [isSeeked, currentTime]);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = currentSound;
        }
    }, [currentSound]);

    useEffect(() => {
        if(isError) {
            handleChangeMusic();
        }
    }, [isError])

    const handleTimeUpdate = (e) => {
        const time = e.target.currentTime;

        ON_CHANGE_CURRENT_TIME(time);
    };

    const handleError = () => {
        ON_PLAYING_MUSIC(false);

        // console.log('is error');
    };

    const handleChangeMusic = () => {
        if (repeatMode === 'none') {
            if (currentIndexMusic >= itemsPlaylist.length - 1) {
                return;
            }
            NEXTMUSIC();
        }
        if (repeatMode === 'all') {
            if (currentIndexMusic >= itemsPlaylist.length - 1) {
                UPDATE_CURRENT_PLAYLIST_MUSIC(0, itemsPlaylist[0]);

                return;
            }
            NEXTMUSIC();
        }
    };

    return (
        <div>
            <audio
                ref={audioRef}
                src={currentSrc}
                muted={muted}
                loop={repeatMode === 'song'}
                onPlay={() => ON_PLAYING_MUSIC(true)}
                onPause={() => ON_PLAYING_MUSIC(false)}
                onError={handleError}
                onEnded={handleChangeMusic}
                onTimeUpdate={handleTimeUpdate}
            ></audio>
        </div>
    );
}

export default AudioApp;

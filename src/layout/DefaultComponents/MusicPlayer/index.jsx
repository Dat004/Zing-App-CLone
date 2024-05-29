import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { playlistRemainingSelector, historySelector } from '../../../redux/selector';
import PlaylistPlayer from './PlaylistPlayer';
import HandlerPlayer from './HandlerPlayer';

function MusicPlayer({ showDefault = false, isShowDefault = false }) {
    const [showPlaylistPlayer, setShowPlaylistPlayer] = useState(true);

    const playlistMusic = useSelector(playlistRemainingSelector);
    const historyMusic = useSelector(historySelector);

    const { isHasPlaylist } = playlistMusic;

    useEffect(() => {
        if (showDefault) {
            setShowPlaylistPlayer(true);

            return;
        };
    }, [showDefault]);

    const data = {
        playlistMusic: playlistMusic,
        historyMusic: historyMusic,
    };

    const handleShowMenuPlayer = () => {
        setShowPlaylistPlayer((prev) => !prev);
    };

    return (
        <div className="relative z-999">
            {isHasPlaylist && <HandlerPlayer data={data.playlistMusic} onShowPLaylistPLayer={handleShowMenuPlayer} />}
            <PlaylistPlayer data={data} showDefault={showDefault} showPlaylistPlayer={showPlaylistPlayer} />
        </div>
    );
}

export default MusicPlayer;

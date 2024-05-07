import { useState } from 'react';

import PlaylistPlayer from './PlaylistPlayer';
import HandlerPlayer from './HandlerPlayer';

function MusicPlayer() {
    const [showPlaylistPlayer, setShowPlaylistPlayer] = useState(true);

    const handleShowMenuPlayer = () => {
        setShowPlaylistPlayer((prev) => !prev);
    };

    return (
        <div className="relative z-999">
            <HandlerPlayer onShowPLaylistPLayer={handleShowMenuPlayer} />
            <PlaylistPlayer showPlaylistPlayer={showPlaylistPlayer} />
        </div>
    );
}

export default MusicPlayer;

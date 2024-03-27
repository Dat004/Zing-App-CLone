import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import detailsPlaylist from '../apiProvider/detailsPlaylist';
import { useLoadingState } from '../hooks';

function Playlist() {
    const [newData, setNewData] = useState({});
    const { idplaylist, nameplaylist } = useParams();
    const { isLoading, handleSetLoadingState } = useLoadingState();

    useEffect(() => {
        (async () => {
            const data = await detailsPlaylist(idplaylist);
            if (data.Error?.isError) {
                handleSetLoadingState(true);
            } else {
                handleSetLoadingState(false);
                setNewData((prev) => ({ ...prev, ...data?.data?.data }));
            }
        })();
    }, []);

    return <h1>Playlist PAGE</h1>;
}

export default Playlist;

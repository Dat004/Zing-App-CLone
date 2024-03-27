import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import detailsPlaylist from '../apiProvider/detailsPlaylist';
import CardImage from '../components/CardImage';
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

    return (
        <div className="w-full mt-[70px]">
            <div className="pt-[20px]">
                <div className="flex w-full">
                    <div className="w-[300px] flex-shrink-0">
                        <CardImage isScale larger src="" />
                        <div className="w-full text-center">
                            <h3 className="text-[20px] font-bold"></h3>
                             
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Playlist;

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import CardMusicSkeleton from '../../components/SkeletonLoading/CardMusicSkeleton';
import MusicActions from '../../redux/actions/MusicActions';
import { MusicCards } from '../../components/Card';
import apiService from '../../services';

function WeekChartCountryScreen({ isLoading = true, handleLoading = () => {} }) {
    const { ADD_PLAYLIST } = MusicActions();
    const { idWeekChart } = useParams();
    const [data, setData] = useState({});

    useEffect(() => {
        (async () => {
            handleClearState();
            const data = await apiService.weekChartApi(idWeekChart);

            if (data.Error?.isError) {
                handleClearState();
            } else {
                setData({ ...data?.data?.data });
                handleLoading(false);
            }
        })();
    }, [idWeekChart]);

    const handleGetData = (data, id) => {
        const index = data.findIndex(items => items.encodeId === id);

        ADD_PLAYLIST(data, index);
    };

    const handleClearState = () => {
        handleLoading(true);
        setData({});
    };

    return (
        <>
            {isLoading ? (
                <CardMusicSkeleton />
            ) : (
                <>
                    {data?.items?.map((items, index) => (
                        <MusicCards
                            onGetMusic={() => handleGetData(data?.items, items?.encodeId)}
                            className="size-size-0.4"
                            id={index}
                            key={index}
                            data={items}
                            isShowRanking
                            isShowLeftCard
                            isShowSeparator
                            isShowRightCard
                            isShowNameAlbum
                            isShowStateRanking
                            isShowDurationTimeMusic
                        />
                    ))}
                </>
            )}
        </>
    );
}

export default WeekChartCountryScreen;

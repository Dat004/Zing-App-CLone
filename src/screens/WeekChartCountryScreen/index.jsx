import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import CardMusicSkeleton from '../../components/SkeletonLoading/CardMusicSkeleton';
import { MusicCards } from '../../components/Card';
import apiService from '../../services';

function WeekChartCountryScreen({ isLoading = true, handleLoading = () => {} }) {
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

    const handleClearState = () => {
        handleLoading(true);
        setData({});
    };

    return (
        <>
            {isLoading ? (
                <CardMusicSkeleton />
            ) : (
                <MusicCards
                    className="size-size-0.4"
                    data={data?.items}
                    isShowLeftCard
                    isShowRightCard
                    isShowDurationTimeMusic
                    isShowNameAlbum
                    isShowRanking
                    isShowStateRanking
                />
            )}
        </>
    );
}

export default WeekChartCountryScreen;

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import CardMusicSkeleton from '../../components/SkeletonLoading/CardMusicSkeleton';
import { MusicCard } from '../../components/Card';
import apiService from '../../services';

function WeekChartCountryScreen({ isLoading = true, handleLoading = () => {} }) {
    const { idWeekChart } = useParams();
    const [data, setData] = useState({});

    useEffect(() => {
        (async () => {
            handleClearState();
            const data = await apiService.weekChartApi(idWeekChart);

            if (data.Error?.isError) {
                handleLoading(true);
            }

            setData({ ...data?.data?.data });
            handleLoading(false);
        })();
    }, [idWeekChart]);

    const handleClearState = () => {
        handleLoading(true);
        setData({});
    };

    return <>{isLoading ? <CardMusicSkeleton /> : <MusicCard data={data?.items} isShowRankingNumber isShowAlbum />}</>;
}

export default WeekChartCountryScreen;

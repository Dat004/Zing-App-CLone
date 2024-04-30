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
            const data = (await apiService.weekChar) + tApi(idWeekChart);

            console.log(data);

            if (data.Error?.isError) {
                handleClearState();
            }

            setData({ ...data?.data?.data });
            handleLoading(false);
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
                <MusicCards data={data?.items} isShowRightCard isShowDurationTimeMusic isShowNameAlbum isAllowSellect />
            )}
        </>
    );
}

export default WeekChartCountryScreen;

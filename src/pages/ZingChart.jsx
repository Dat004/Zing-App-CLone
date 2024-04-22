import { useEffect, useState } from 'react';

import CardMusicSkeleton from '../components/SkeletonLoading/CardMusicSkeleton';
import ZingChartPageComponent from '../components/ZingChartPageComponent';
import PageLoader from '../layout/DefaultComponents/PageLoader';
import { PlayBoldIcon } from '../components/CustomIcon';
import { useLoadingState } from '../hooks';
import apiService from '../services';

function ZingChart() {
    const [newData, setNewData] = useState({
        chart: {
            data: {},
            topTrendMusic: [],
        },
        weekChart: {
            korea: {},
            us: {},
            vn: {},
        },
        randomSuggestSong: {
            randomId: 0,
            listSuggestSong: [],
        },
        newRealease: {
            top10: [],
            topRemaning: [],
        },
    });
    const { isLoading, handleSetLoadingState } = useLoadingState();

    useEffect(() => {
        (async () => {
            const data = await apiService.newReleaseChartApi();
            if (data.Error?.isError) {
                handleSetLoadingState(true);
            } else {
                setNewData({
                    chart: {
                        data: data?.data?.data?.RTChart?.chart,
                        topTrendMusic: [...data?.data?.data?.RTChart?.items?.slice(0, 3)],
                    },
                    weekChart: {
                        korea: { ...data?.data?.data?.weekChart?.korea },
                        us: { ...data?.data?.data?.weekChart?.us },
                        vn: { ...data?.data?.data?.weekChart?.vn },
                    },
                    randomSuggestSong: {
                        listSuggestSong: [...data?.data?.data?.RTChart?.promotes],
                        randomId: Math.max(
                            0,
                            Math.min(
                                Math.round(Math.random() * data?.data?.data?.RTChart?.promotes?.length - 1),
                                data?.data?.data?.RTChart?.promotes?.length - 1,
                            ),
                        ),
                    },
                    newRealease: {
                        top10: [...data?.data?.data?.RTChart?.items?.splice(0, 10)],
                        topRemaning: [...data?.data?.data?.RTChart?.items],
                    },
                });
                handleSetLoadingState(false);
            }
        })();
    }, []);

    return (
        <div className="mt-[70px] pt-[40px]">
            <header className="flex items-center mb-[20px]">
                <h3 className="text-[40px] leading-[1.225] bg-bg-text-linear font-bold bg-clip-text text-fill-transparent">
                    #zingchart
                </h3>
                <i className="ml-[10px] hover:opacity-90 cursor-pointer">
                    <PlayBoldIcon />
                </i>
            </header>
            {isLoading ? (
                <PageLoader isMaskLayer className="!mt-0">
                    <CardMusicSkeleton />
                </PageLoader>
            ) : (
                <ZingChartPageComponent data={newData} />
            )}
        </div>
    );
}

export default ZingChart;

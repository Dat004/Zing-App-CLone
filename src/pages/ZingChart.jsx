import { useEffect, useState } from 'react';

import CardMusicSkeleton from '../components/SkeletonLoading/CardMusicSkeleton';
import PageLoader from '../layout/DefaultComponents/PageLoader';
import { PlayBoldIcon } from '../components/CustomIcon';
import LineChart from '../components/Charts/LineChart';
import { MusicCard } from '../components/Card';
import { useLoadingState } from '../hooks';
import Button from '../components/Button';
import apiService from '../apiProvider';

function ZingChart() {
    const [isShowMore, setIsShowMore] = useState(false);
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

    const handleShowMore = () => {
        if (!isShowMore) {
            setIsShowMore(true);
        }
    };

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
                <section className="pb-[30px]">
                    <section className="mb-[55px]">
                        <LineChart
                            height="300px"
                            dataInfoTooltip={newData.chart.topTrendMusic.filter(
                                (item, index) => item?.encodeId === newData.newRealease.top10[index]?.encodeId,
                            )}
                            dataCharts={Object.values(newData.chart.data?.items)
                                .map((data) => ({ dataCharts: [...data] }))
                                .map((data) => data.dataCharts)}
                            dataLabels={newData.chart.data?.times}
                            maxScore={newData.chart.data?.maxScore}
                            minScore={newData.chart.data?.minScore}
                        ></LineChart>
                    </section>
                    <div className="mb-[20px]">
                        <MusicCard
                            isSuggest
                            isShowAlbum
                            data={[newData.randomSuggestSong.listSuggestSong[newData.randomSuggestSong.randomId]]}
                        />
                        <MusicCard
                            isShowRankingNumber
                            isShowAlbum
                            data={
                                isShowMore
                                    ? [...newData.newRealease.top10, ...newData.newRealease.topRemaning]
                                    : newData.newRealease.top10
                            }
                        />
                    </div>
                    {!isShowMore && (
                        <div className="flex items-center justify-center w-full">
                            <Button
                                onClick={handleShowMore}
                                className="py-[8px] px-[25px] text-[14px] font-medium border-purple-bd-white-color"
                                outline
                                medium
                            >
                                Xem top 100
                            </Button>
                        </div>
                    )}
                </section>
            )}
        </div>
    );
}

export default ZingChart;

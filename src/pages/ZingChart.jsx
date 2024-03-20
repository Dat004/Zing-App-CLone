import { useEffect, useState } from 'react';

import { PlayBoldIcon } from '../components/CustomIcon';
import LineChart from '../components/Charts/LineChart';
import apiService from '../apiProvider';
import Button from '../components/Button';
import CardMusic from '../components/CardImage/CardMusic';

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
        isSuccess: false,
    });

    useEffect(() => {
        (async () => {
            const data = await apiService.newReleaseChartApi();

            setNewData({
                chart: {
                    data: data?.data?.RTChart?.chart,
                    topTrendMusic: [...data?.data?.RTChart?.items?.slice(0, 3)],
                },
                weekChart: {
                    korea: { ...data?.data?.weekChart?.korea },
                    us: { ...data?.data?.weekChart?.us },
                    vn: { ...data?.data?.weekChart?.vn },
                },
                randomSuggestSong: {
                    listSuggestSong: [...data?.data?.RTChart?.promotes],
                    randomId: Math.max(
                        0,
                        Math.min(
                            Math.round(Math.random() * data?.data?.RTChart?.promotes.length - 1),
                            data?.data?.RTChart?.promotes.length - 1,
                        ),
                    ),
                },
                newRealease: {
                    top10: [...data?.data?.RTChart?.items?.splice(0, 10)],
                    topRemaning: [...data?.data?.RTChart?.items],
                },
                isSuccess: true,
            });
        })();
    }, []);

    const handleShowMore = () => {
        if (!isShowMore) {
            setIsShowMore(true);
        }
    };

    return (
        <div className="mt-[70px]">
            {newData.isSuccess && (
                <section className="pt-[40px] pb-[30px]">
                    <header className="flex items-center mb-[20px]">
                        <h3 className="text-[40px] leading-[1.225] bg-bg-text-linear font-bold bg-clip-text text-fill-transparent">
                            #zingchart
                        </h3>
                        <i className="ml-[10px] hover:opacity-90 cursor-pointer">
                            <PlayBoldIcon />
                        </i>
                    </header>
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
                        <CardMusic
                            isShowAlbum
                            data={[newData.randomSuggestSong.listSuggestSong[newData.randomSuggestSong.randomId]]}
                            isSuggest
                        />
                        <CardMusic
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

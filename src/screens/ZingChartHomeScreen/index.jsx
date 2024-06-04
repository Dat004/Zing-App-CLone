import { useEffect, useState } from 'react';

import MusicActions from '../../redux/actions/MusicActions';
import LineChart from '../../components/Charts/LineChart';
import { MusicCards } from '../../components/Card';
import Button from '../../components/Button';
import images from '../../assets/images';
import Charts from './Charts';

function ZingChartHomeScreen({ data = {} }) {
    let newData;

    const { ADD_PLAYLIST } = MusicActions();
    const [isShowAll, setIsShowAll] = useState(false);

    useEffect(() => {
        if (isShowAll) newData = [...data.newRealease.top10, ...data.newRealease.topRemaning];
        newData = data.newRealease.top10;
    }, [isShowAll]);

    const handleGetData = (data, id) => {
        const index = data.findIndex((items) => items.encodeId === id);

        ADD_PLAYLIST(data, index, {});
    };

    const handleShowAll = () => {
        if (!isShowAll) {
            setIsShowAll(true);
        }
    };

    return (
        <div>
            <section className="pb-[30px]">
                <section className="mb-[55px]">
                    <LineChart
                        height="300px"
                        dataInfoTooltip={data.chart.topTrendMusic.filter(
                            (item, index) => item?.encodeId === data.newRealease.top10[index]?.encodeId,
                        )}
                        dataCharts={Object.values(data.chart.data?.items)
                            .map((data) => ({ dataCharts: [...data] }))
                            .map((data) => data.dataCharts)}
                        dataLabels={data.chart.data?.times}
                        maxScore={data.chart.data?.maxScore}
                        minScore={data.chart.data?.minScore}
                    ></LineChart>
                </section>
                <div className="mb-[20px]">
                    {[data.randomSuggestSong.listSuggestSong[data.randomSuggestSong.randomId]]?.map((items, index) => (
                        <MusicCards
                            onGetMusic={() =>
                                handleGetData(
                                    [data.randomSuggestSong.listSuggestSong[data.randomSuggestSong.randomId]],
                                    items?.encodeId,
                                )
                            }
                            className="size-size-0.4"
                            id={index}
                            key={index}
                            data={items}
                            isSuggesttion
                            isShowLeftCard
                            isShowSeparator
                            isShowRightCard
                            isShowNameAlbum
                            isShowDurationTimeMusic
                        />
                    ))}
                    {newData?.map((items, index) => (
                        <MusicCards
                            onGetMusic={() => handleGetData(newData, items?.encodeId)}
                            className="size-size-0.4"
                            id={index}
                            key={index}
                            data={items}
                            isShowRanking
                            isShowLeftCard
                            isShowRightCard
                            isShowSeparator
                            isShowNameAlbum
                            isShowStateRanking
                            isShowDurationTimeMusic
                        />
                    ))}
                </div>
                {!isShowAll && (
                    <div className="flex items-center justify-center w-full">
                        <Button
                            onClick={handleShowAll}
                            className="py-[8px] px-[25px] text-[14px] font-medium border-purple-bd-white-color"
                            outline
                            medium
                        >
                            Xem top 100
                        </Button>
                    </div>
                )}
            </section>
            <div className="relative mt-[28px] pt-[40px]">
                <div
                    style={{ backgroundImage: `url(${images.weekChart})` }}
                    className="absolute inset-0 bg-no-repeat bg-cover bg-center mx-[-59px] XM:mx-[-29px] mb-[-30px] z-1"
                ></div>
                <div className="absolute inset-0 mx-[-59px] XM:mx-[-29px] mb-[-30px] bg-purple-bg-chart-box z-5"></div>
                <h1 className="mb-[20px] text-[40px] text-purple-text-primary font-bold">Bảng Xếp Hạng Tuần</h1>
                <div className="relative flex flex-wrap items-center gap-y-[30px] mx-[-14px] LM:mx-[-12px] pb-[30px] z-10">
                    <div className="w-1/3 ML:w-full px-[14px] LM:px-[12px] flex-shrink-0">
                        <Charts
                            title="Việt Nam"
                            to={data.weekChart.vn?.link?.split('.')[0]}
                            data={data.weekChart.vn?.items}
                        />
                    </div>
                    <div className="w-1/3 ML:w-full px-[14px] LM:px-[12px] flex-shrink-0">
                        <Charts
                            title="US-UK"
                            to={data.weekChart.us?.link?.split('.')[0]}
                            data={data.weekChart.us?.items}
                        />
                    </div>
                    <div className="w-1/3 ML:w-full px-[14px] LM:px-[12px] flex-shrink-0">
                        <Charts
                            title="K-Pop"
                            to={data.weekChart.korea?.link?.split('.')[0]}
                            data={data.weekChart.korea?.items}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ZingChartHomeScreen;

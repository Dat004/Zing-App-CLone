import { useEffect, useState } from 'react';

import MusicActions from '../../../redux/actions/MusicActions';
import BoxContent from '../../../components/BoxContent';
import { MusicCards } from '../../../components/Card';
import Tabs from './Tabs';

function NewRelease({ data = [], title = '', isHeader = false, isSeeAll = false }) {
    const { ADD_PLAYLIST, ADD_MUSIC_TO_HISTORY } = MusicActions();

    const [isActive, setIsActive] = useState('all');
    const [newData, setNewData] = useState({
        all: {
            col1: [],
            col2: [],
            col3: [],
        },
        others: {
            col1: [],
            col2: [],
            col3: [],
        },
        vPop: {
            col1: [],
            col2: [],
            col3: [],
        },
    });

    useEffect(() => {
        setNewData((state) => ({
            ...state,
            all: {
                col1: [...data?.all?.slice(0, 4)], // Xử lí việc cắt 4 phần tử đầu của data
                col2: [...data?.all?.slice(4, 8)], // Xử lí việc cắt 4 phần tử đầu của data
                col3: [...data?.all?.slice(8, 12)], // Xử lí việc cắt 4 phần tử đầu của data
            },
            others: {
                col1: [...data?.others?.slice(0, 4)], // Xử lí việc cắt 4 phần tử đầu của data
                col2: [...data?.others?.slice(4, 8)], // Xử lí việc cắt 4 phần tử đầu của data
                col3: [...data?.others?.slice(8, 12)], // Xử lí việc cắt 4 phần tử đầu của data
            },
            vPop: {
                col1: [...data?.vPop?.slice(0, 4)], // Xử lí việc cắt 4 phần tử đầu của data
                col2: [...data?.vPop?.slice(4, 8)], // Xử lí việc cắt 4 phần tử đầu của data
                col3: [...data?.vPop?.slice(8, 12)], // Xử lí việc cắt 4 phần tử đầu của data
            },
        }));
    }, [data]);

    const handleTabsClick = (tabName) => {
        setIsActive(tabName);
    };

    const handleSelectMusic = (data, id) => {
        const index = data?.findIndex((items) => items?.encodeId === id);

        ADD_PLAYLIST(data, index, {});
        ADD_MUSIC_TO_HISTORY();
    };

    return (
        <BoxContent title={title} isSeeAll={isSeeAll} isHeader={isHeader}>
            <div>
                <div className="flex items-center gap-[15px] mb-[16px]">
                    <Tabs onClick={() => handleTabsClick('all')} isActive={isActive === 'all'}>
                        TẤT CẢ
                    </Tabs>
                    <Tabs onClick={() => handleTabsClick('vietnamese')} isActive={isActive === 'vietnamese'}>
                        VIỆT NAM
                    </Tabs>
                    <Tabs onClick={() => handleTabsClick('international')} isActive={isActive === 'international'}>
                        QUỐC TẾ
                    </Tabs>
                </div>
                {isActive === 'all' && (
                    <div className="flex h-[321px] min-h-[191px] mx-[-15px]">
                        <div className="L:w-[50%] w-[33.33%] px-[15px]">
                            {newData.all.col1?.map((items, index) => (
                                <MusicCards
                                    className="size-size-0.6"
                                    onGetMusic={() => handleSelectMusic(data?.all, items?.encodeId)}
                                    id={index}
                                    key={index}
                                    data={items}
                                    smallCard
                                    isShowTimeRelease
                                />
                            ))}
                        </div>
                        <div className="L:w-[50%] w-[33.33%] px-[15px]">
                            {newData.all.col2?.map((items, index) => (
                                <MusicCards
                                    className="size-size-0.6"
                                    onGetMusic={() => handleSelectMusic(data?.all, items?.encodeId)}
                                    id={index}
                                    key={index}
                                    data={items}
                                    smallCard
                                    isShowTimeRelease
                                />
                            ))}
                        </div>
                        <div className="w-[33.33%] L:hidden px-[15px]">
                            {newData.all.col3?.map((items, index) => (
                                <MusicCards
                                    className="size-size-0.6"
                                    onGetMusic={() => handleSelectMusic(data?.all, items?.encodeId)}
                                    id={index}
                                    key={index}
                                    data={items}
                                    smallCard
                                    isShowTimeRelease
                                />
                            ))}
                        </div>
                    </div>
                )}
                {isActive === 'vietnamese' && (
                    <div className="flex h-[321px] min-h-[191px] mx-[-15px]">
                        <div className="L:w-[50%] w-[33.33%] px-[15px]">
                            {newData.vPop.col1?.map((items, index) => (
                                <MusicCards
                                    className="size-size-0.6"
                                    onGetMusic={() => handleSelectMusic(data?.vPop, items?.encodeId)}
                                    id={index}
                                    key={index}
                                    data={items}
                                    smallCard
                                    isShowTimeRelease
                                />
                            ))}
                        </div>
                        <div className="L:w-[50%] w-[33.33%] px-[15px]">
                            {newData.vPop.col2?.map((items, index) => (
                                <MusicCards
                                    className="size-size-0.6"
                                    onGetMusic={() => handleSelectMusic(data?.vPop, items?.encodeId)}
                                    id={index}
                                    key={index}
                                    data={items}
                                    smallCard
                                    isShowTimeRelease
                                />
                            ))}
                        </div>
                        <div className="w-[33.33%] L:hidden px-[15px]">
                            {newData.vPop.col3?.map((items, index) => (
                                <MusicCards
                                    className="size-size-0.6"
                                    onGetMusic={() => handleSelectMusic(data?.vPop, items?.encodeId)}
                                    id={index}
                                    key={index}
                                    data={items}
                                    smallCard
                                    isShowTimeRelease
                                />
                            ))}
                        </div>
                    </div>
                )}
                {isActive === 'international' && (
                    <div className="flex h-[321px] min-h-[191px] mx-[-15px]">
                        <div className="L:w-[50%] w-[33.33%] px-[15px]">
                            {newData.others.col1?.map((items, index) => (
                                <MusicCards
                                    className="size-size-0.6"
                                    onGetMusic={() => handleSelectMusic(data?.others, items?.encodeId)}
                                    id={index}
                                    key={index}
                                    data={items}
                                    smallCard
                                    isShowTimeRelease
                                />
                            ))}
                        </div>
                        <div className="L:w-[50%] w-[33.33%] px-[15px]">
                            {newData.others.col2?.map((items, index) => (
                                <MusicCards
                                    className="size-size-0.6"
                                    onGetMusic={() => handleSelectMusic(data?.others, items?.encodeId)}
                                    id={index}
                                    key={index}
                                    data={items}
                                    smallCard
                                    isShowTimeRelease
                                />
                            ))}
                        </div>
                        <div className="w-[33.33%] L:hidden px-[15px]">
                            {newData.others.col3?.map((items, index) => (
                                <MusicCards
                                    className="size-size-0.6"
                                    onGetMusic={() => handleSelectMusic(data?.others, items?.encodeId)}
                                    id={index}
                                    key={index}
                                    data={items}
                                    smallCard
                                    isShowTimeRelease
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </BoxContent>
    );
}

export default NewRelease;

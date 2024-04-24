import { useEffect, useState } from 'react';

import BoxContent from '../../../components/BoxContent';
import ListsMusic from './ListsMusis';
import Tabs from './Tabs';

function NewRelease({ data = [], title = '', isHeader = false, isSeeAll = false }) {
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
                col1: [data?.all?.splice(0, 4)], // Xử lí việc cắt 4 phần tử đầu của data
                col2: [data?.all?.splice(0, 4)], // Xử lí việc cắt 4 phần tử đầu của data
                col3: [data?.all?.splice(0, 4)], // Xử lí việc cắt 4 phần tử đầu của data
            },
            others: {
                col1: [data?.others?.splice(0, 4)], // Xử lí việc cắt 4 phần tử đầu của data
                col2: [data?.others?.splice(0, 4)], // Xử lí việc cắt 4 phần tử đầu của data
                col3: [data?.others?.splice(0, 4)], // Xử lí việc cắt 4 phần tử đầu của data
            },
            vPop: {
                col1: [data?.vPop?.splice(0, 4)], // Xử lí việc cắt 4 phần tử đầu của data
                col2: [data?.vPop?.splice(0, 4)], // Xử lí việc cắt 4 phần tử đầu của data
                col3: [data?.vPop?.splice(0, 4)], // Xử lí việc cắt 4 phần tử đầu của data
            },
        }));
    }, [data]);

    const handleTabsClick = (tabName) => {
        setIsActive(tabName);
    };

    return (
        <BoxContent title={title} isSeeAll={isSeeAll} isHeader={isHeader}>
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
                        <ListsMusic data={newData.all.col1[0]} />
                    </div>
                    <div className="L:w-[50%] w-[33.33%] px-[15px]">
                        <ListsMusic data={newData.all.col2[0]} />
                    </div>
                    <div className="w-[33.33%] L:hidden px-[15px]">
                        <ListsMusic data={newData.all.col3[0]} />
                    </div>
                </div>
            )}
            {isActive === 'vietnamese' && (
                <div className="flex h-[321px] min-h-[191px] mx-[-15px]">
                    <div className="L:w-[50%] w-[33.33%] px-[15px]">
                        <ListsMusic data={newData.vPop.col1[0]} />
                    </div>
                    <div className="L:w-[50%] w-[33.33%] px-[15px]">
                        <ListsMusic data={newData.vPop.col2[0]} />
                    </div>
                    <div className="w-[33.33%] L:hidden px-[15px]">
                        <ListsMusic data={newData.vPop.col3[0]} />
                    </div>
                </div>
            )}
            {isActive === 'international' && (
                <div className="flex h-[321px] min-h-[191px] mx-[-15px]">
                    <div className="L:w-[50%] w-[33.33%] px-[15px]">
                        <ListsMusic data={newData.others.col1[0]} />
                    </div>
                    <div className="L:w-[50%] w-[33.33%] px-[15px]">
                        <ListsMusic data={newData.others.col2[0]} />
                    </div>
                    <div className="w-[33.33%] L:hidden px-[15px]">
                        <ListsMusic data={newData.others.col3[0]} />
                    </div>
                </div>
            )}
        </BoxContent>
    );
}

export default NewRelease;

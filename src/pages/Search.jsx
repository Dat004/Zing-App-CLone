import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import TabsButton from '../components/Button/TabsButton';
import { useLoadingState } from '../hooks';
import apiService from '../services';
import DATAS from '../tempData';

function Search() {
    const { keyword } = useParams();
    const { isLoading, handleSetLoadingState } = useLoadingState();

    const [idTab, setIdTab] = useState(0);

    // useEffect(() => {
    //     (async () => {})();
    // }, [keyword]);

    const handleActive = (id) => {
        setIdTab(id);
    };

    return (
        <div className="mt-[70px]">
            <div className="mx-[-59px] XM:mx-[-29px]">
                <div className="w-full px-[59px] XM:px-[29px] border-b border-solid border-purple-bd-primary-color">
                    <div className="flex items-center">
                        <div className="pr-[20px] border-r border-solid border-purple-bd-primary-color LS:hidden">
                            <h3 className="text-[24px] text-purple-text-primary font-bold leading-[1.2]">
                                Kết Quả Tìm Kiếm
                            </h3>
                        </div>
                        <div className="flex items-center gap-[40px] ml-[20px]">
                            {DATAS.DATA_MENU_SEARCH.map((items, index) => (
                                <TabsButton
                                    className="!text-[14px] !font-medium"
                                    onClick={() => handleActive(index)}
                                    isActive={index === idTab}
                                    heightBarActive="2px"
                                    key={index}
                                    isHover
                                >
                                    {items.name}
                                </TabsButton>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;

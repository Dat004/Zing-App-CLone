import { useState, useEffect } from 'react';
import { useParams, useSearchParams, useLocation } from 'react-router-dom';

import CardMusicSkeleton from '../components/SkeletonLoading/CardMusicSkeleton';
import PlaylistSkeleton from '../components/SkeletonLoading/PlaylistSkeleton';
import SkeletonLoading from '../components/SkeletonLoading';
import SearchResultsScreen from '../screens/SearchResultsScreen';
import PageLoader from '../layout/DefaultComponents/PageLoader';
import TabsButton from '../components/Button/TabsButton';
import { useLoadingState } from '../hooks';
import apiService from '../services';
import DATAS from '../tempData';

function Search() {
    const location = useLocation();
    const query = location.search?.split('?')[1]?.split('=')[0];

    const { isLoading, handleSetLoadingState } = useLoadingState();
    const [searchParams] = useSearchParams();
    const [data, setData] = useState({});

    const keyword = searchParams.get(query);

    const [tabIndex, setTabIndex] = useState(0);

    useEffect(() => {
        (async () => {
            handleClearState();
            const data = await apiService.searchResultsApi(keyword);

            if (data.Error?.isError) {
                handleClearState();
            } else {
                handleSetLoadingState(false);
                setData({ ...data?.data?.data });
            }
        })();
    }, [keyword]);

    const handleClearState = () => {
        handleSetLoadingState(true);
        setData({});
    };

    const handleActive = (id) => {
        setTabIndex(id);
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
                                    to={`${items.href}?query=${keyword}`}
                                    className="!text-[14px] !font-medium"
                                    onClick={() => handleActive(index)}
                                    isActive={index === tabIndex}
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
            {isLoading ? (
                <PageLoader className="!mt-[30px]" isMaskLayer>
                    <PlaylistSkeleton countData={[1, 2]} />
                    <div className="mb-[30px]">
                        <div className="w-full max-w-[30%] h-[30px] mb-[10px]">
                            <SkeletonLoading />
                        </div>
                        <div className="my-[30px]">
                            <CardMusicSkeleton countData={[1, 2, 3, 4]} />
                        </div>
                    </div>
                    <PlaylistSkeleton countData={[1, 2]} />
                </PageLoader>
            ) : (
                <SearchResultsScreen data={data} tabIndex={tabIndex} />
            )}
        </div>
    );
}

export default Search;

import { Fragment, useEffect, useState } from 'react';

import PlaylistSkeleton from '../components/SkeletonLoading/PlaylistSkeleton';
import SliderPlaylist from '../components/SliderBanner/SliderPlaylist';
import PageLoader from '../layout/DefaultComponents/PageLoader';
import SkeletonLoading from '../components/SkeletonLoading';
import PartnerLayout from '../components/PartnerLayout';
import SliderBanner from '../components/SliderBanner';
import NewRelease from '../components/NewRelease';
import PlayLists from '../components/PlayLists';
import { useLoadingState } from '../hooks';
import Banner from '../components/Banner';
import apiService from '../apiProvider';

function Home() {
    const [dataHome, setDataHome] = useState({});
    const { isLoading, handleSetLoadingState } = useLoadingState();

    useEffect(() => {
        (async () => {
            const data = await apiService.homeApi();
            if (data.Error?.isError) {
                handleSetLoadingState(true);
            } else {
                setDataHome({
                    ...data?.data?.data,
                });
                handleSetLoadingState(false);
            }
        })();
    }, []);

    return (
        <div className="w-full h-full mt-[70px]">
            {isLoading ? (
                <PageLoader isMaskLayer>
                    <div className="flex justify-center h-[250px] w-full">
                        <div className="w-full max-w-[970px] h-full text-center">
                            <SkeletonLoading />
                        </div>
                    </div>
                    <div className="flex my-[50px] mx-[-15px] XM:mx-[-12px]">
                        {Array.from([1, 2, 3]).map((_, index) => (
                            <div key={index} className="relative px-[15px] w-1/3 XM:px-[12px] XM:w-1/2 flex-shrink-0">
                                <div className="relative w-full pb-[50%]">
                                    <span className="absolute inset-0">
                                        <SkeletonLoading />
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <PlaylistSkeleton />
                </PageLoader>
            ) : (
                <Fragment>
                    {dataHome?.items?.map((items, index) => {
                        const isTitle = !!items?.title;
                        const isPlaylist = items?.sectionType === 'playlist' && !items?.options?.autoSlider;
                        const isSliderBanner = items?.sectionType === 'banner';
                        const isNewRelease = items?.sectionType === 'new-release';
                        const isPlayListHasDes = items?.sectionType === 'playlist' && items?.itemType === 'description';
                        const isBanner = items?.sectionType === 'weekChart';
                        const isSliderPlaylist = items?.sectionType === 'playlist' && items?.options?.autoSlider;
                        const getData =
                            (items?.sectionType === 'playlist' && items?.itemType === 'description') ||
                            (items?.sectionType === 'playlist' && !items?.options?.autoSlider)
                                ? items?.items?.slice(0, 5)
                                : items?.items;

                        // console.log(
                        //     isTitle,
                        //     isPlaylist,
                        //     isSliderBanner,
                        //     isNewRelease,
                        //     isPlayListHasDes,
                        //     isBanner,
                        //     isPlaylistHaveTitleAndArtists,
                        //     isSliderPlaylist,
                        //     getData,
                        // );

                        return (
                            <Fragment key={index}>
                                {isSliderBanner && <SliderBanner data={getData} />}
                                {isNewRelease && (
                                    <NewRelease data={getData} title={items?.title} isHeader={isTitle ? true : false} />
                                )}
                                {isPlaylist && (
                                    <PlayLists
                                        data={getData}
                                        title={items?.title}
                                        to={items?.link?.split('.')[0]}
                                        isShowTitlePlaylist={!isPlayListHasDes ? true : false}
                                        isShowArtists={!isPlayListHasDes ? true : false}
                                        isHeader={isTitle ? true : false}
                                        isSeeAll
                                    />
                                )}
                                {isBanner && <Banner data={getData} />}
                                {isSliderPlaylist && (
                                    <SliderPlaylist
                                        data={getData}
                                        title={items?.title}
                                        isHeader={isTitle ? true : false}
                                        isShowTitlePlaylist={!isPlayListHasDes ? true : false}
                                        isShowArtists={!isPlayListHasDes ? true : false}
                                    />
                                )}
                            </Fragment>
                        );
                    })}
                    <PartnerLayout />
                </Fragment>
            )}
        </div>
    );
}

export default Home;

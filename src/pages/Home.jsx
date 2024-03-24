import { Fragment, useEffect, useState } from 'react';

import PlaylistSkeleton from '../components/SkeletonLoading/PlaylistSkeleton';
import SliderPlaylist from '../components/SliderBanner/SliderPlaylist';
import PageLoader from '../layout/DefaultComponents/PageLoader';
import SkeletonLoading from '../components/SkeletonLoading';
import PartnerLayout from '../components/PartnerLayout';
import SliderBanner from '../components/SliderBanner';
import NewRelease from '../components/NewRelease';
import PlayLists from '../components/PlayLists';
import Banner from '../components/Banner';
import apiService from '../apiProvider';

function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const [dataHome, setDataHome] = useState({
        banner: [],
        newRelease: {},
        chillPlaylists: {
            title: '',
            items: [],
        },
        remixPlaylists: {
            title: '',
            items: [],
        },
        moodPlaylists: {
            title: '',
            items: [],
        },
        top100Playlists: {
            title: '',
            items: [],
        },
        hotPlaylists: {
            title: '',
            items: [],
        },
        adBanner: [],
    });

    // useEffect(() => {
    //     (async () => {
    //         const data = await apiService.homeApi();
    //         if (data.Error?.isError) {
    //             setIsLoading(true);
    //         } else {
    //             setDataHome({
    //                 banner: data?.data?.data?.items[0],
    //                 newRelease: data?.data?.data?.items[2],
    //                 chillPlaylists: {
    //                     title: data?.data?.data?.items[3]?.title,
    //                     items: data?.data?.data?.items[3]?.items?.slice(0, 5),
    //                 },
    //                 remixPlaylists: {
    //                     title: data?.data?.data?.items[4]?.title,
    //                     items: data?.data?.data?.items[4]?.items?.slice(0, 5),
    //                 },
    //                 moodPlaylists: {
    //                     title: data?.data?.data?.items[5]?.title,
    //                     items: data?.data?.data?.items[5]?.items?.slice(0, 5),
    //                 },
    //                 top100Playlists: {
    //                     title: data?.data?.data?.items[9]?.title,
    //                     items: data?.data?.data?.items[9]?.items?.slice(0, 5),
    //                 },
    //                 hotPlaylists: { title: data?.data?.data?.items[11]?.title, items: data?.data?.data?.items[11]?.items },
    //                 adBanner: data?.data?.data?.items[8]?.items,
    //             });
    //             setIsLoading(false);
    //         }
    //     })();
    // }, []);

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
                    <SliderBanner data={dataHome.banner?.items} />
                    <NewRelease data={dataHome.newRelease} />
                    <PlayLists
                        isHeader
                        isSeeAll
                        title={dataHome.chillPlaylists.title}
                        data={dataHome.chillPlaylists.items}
                    />
                    <PlayLists
                        isHeader
                        isSeeAll
                        title={dataHome.remixPlaylists.title}
                        data={dataHome.remixPlaylists.items}
                    />
                    <PlayLists
                        isHeader
                        isSeeAll
                        title={dataHome.moodPlaylists.title}
                        data={dataHome.moodPlaylists.items}
                    />
                    <Banner data={dataHome.adBanner} />
                    <PlayLists
                        isHeader
                        isSeeAll
                        isShowArtists
                        isShowTitlePlaylist
                        title={dataHome.top100Playlists.title}
                        data={dataHome.top100Playlists.items}
                    />
                    <SliderPlaylist title={`${dataHome.hotPlaylists.title}`} data={dataHome.hotPlaylists.items} />
                    <PartnerLayout />
                </Fragment>
            )}
        </div>
    );
}

export default Home;

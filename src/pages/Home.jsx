import { Fragment, useEffect, useState } from 'react';

import apiService from '../apiProvider';
import SliderBanner from '../components/SliderBanner';
import NewRelease from '../components/NewRelease';
import PlayLists from '../components/PlayLists';
import Banner from '../components/Banner';
import PartnerLayout from '../components/PartnerLayout';
import SkeletonLoading from '../components/SkeletonLoading';
import SliderPlaylist from '../components/SliderBanner/SliderPlaylist';
import PageLoader from '../layout/DefaultComponents/PageLoader';
import PlaylistSkeleton from '../components/SkeletonLoading/PlaylistSkeleton';

function Home() {
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
        length: 0,
    });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // (async () => {
        //     const data = await apiService.homeApi();
        //     setDataHome({
        //         banner: data?.data?.items[0],
        //         newRelease: data?.data?.items[2],
        //         chillPlaylists: { title: data?.data?.items[3].title, items: data?.data?.items[3]?.items?.slice(0, 5) },
        //         remixPlaylists: { title: data?.data?.items[4].title, items: data?.data?.items[4]?.items?.slice(0, 5) },
        //         moodPlaylists: { title: data?.data?.items[5].title, items: data?.data?.items[5]?.items?.slice(0, 5) },
        //         top100Playlists: {
        //             title: data?.data?.items[9].title,
        //             items: data?.data?.items[9]?.items?.slice(0, 5),
        //         },
        //         hotPlaylists: { title: data?.data?.items[11].title, items: data?.data?.items[11]?.items },
        //         adBanner: data?.data?.items[8]?.items,
        //         length: data?.data?.items?.length,
        //     });
        //     setIsLoading(false);
        // })();
    }, []);

    return (
        <div className="w-full h-full mt-[70px]">
            {dataHome.length > 0 ? (
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
            ) : (
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
            )}
        </div>
    );
}

export default Home;

// mask: -webkit-linear-gradient(top, #000, transparent);
// -webkit-mask: -webkit-linear-gradient(top, #000, transparent);

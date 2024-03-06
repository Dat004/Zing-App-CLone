import { Fragment, useEffect, useState } from 'react';

import SliderBanner from '../components/SliderBanner';
import apiService from '../apiProvider';
import NewRelease from '../components/NewRelease';
import PlayLists from '../components/PlayLists';
import Banner from '../components/Banner';
import PartnerLayout from '../components/PartnerLayout';

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

    useEffect(() => {
        (async () => {
            const data = await apiService.homeApi();

            setDataHome({
                banner: data?.data?.items[0],
                newRelease: data?.data?.items[2],
                chillPlaylists: { title: data?.data?.items[3].title, items: data?.data?.items[3]?.items?.splice(0, 5) },
                remixPlaylists: { title: data?.data?.items[4].title, items: data?.data?.items[4]?.items?.splice(0, 5) },
                moodPlaylists: { title: data?.data?.items[5].title, items: data?.data?.items[5]?.items?.splice(0, 5) },
                top100Playlists: {
                    title: data?.data?.items[9].title,
                    items: data?.data?.items[9]?.items?.splice(0, 5),
                },
                hotPlaylists: { title: data?.data?.items[11].title, items: data?.data?.items[11]?.items },
                adBanner: data?.data?.items[8]?.items,
                length: data?.data?.items?.length,
            });
        })();
    }, []);

    return (
        <div className="w-full h-full mt-[70px]">
            {dataHome.length > 0 ? (
                <Fragment>
                    <SliderBanner data={dataHome.banner?.items} />
                    <NewRelease data={dataHome.newRelease} />
                    <PlayLists title={dataHome.chillPlaylists.title} data={dataHome.chillPlaylists.items} />
                    <PlayLists title={dataHome.remixPlaylists.title} data={dataHome.remixPlaylists.items} />
                    <PlayLists title={dataHome.moodPlaylists.title} data={dataHome.moodPlaylists.items} />
                    <Banner data={dataHome.adBanner} />
                    <PlayLists
                        isShowArtists
                        isShowTitlePlaylist
                        title={dataHome.top100Playlists.title}
                        data={dataHome.top100Playlists.items}
                    />
                    <PlayLists
                        isShowArtists
                        isShowTitlePlaylist
                        title={dataHome.hotPlaylists.title}
                        data={dataHome.hotPlaylists.items}
                    />
                    <PartnerLayout />
                </Fragment>
            ) : (
                <div className="w-full h-full"></div>
            )}
        </div>
    );
}

export default Home;

// mask: -webkit-linear-gradient(top, #000, transparent);
// -webkit-mask: -webkit-linear-gradient(top, #000, transparent);

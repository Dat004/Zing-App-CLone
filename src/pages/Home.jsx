import { Fragment, useEffect, useState } from 'react';

import SliderBanner from '../components/SliderBanner';
import apiService from '../apiProvider';
import NewRelease from '../components/NewRelease';
import PlayLists from '../components/PlayLists';

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
                length: data?.data?.items?.length,
            });
        })();
    }, []);

    console.log(dataHome);

    return (
        <div className="w-full h-full mt-[70px]">
            {dataHome.length > 0 ? (
                <Fragment>
                    <SliderBanner data={dataHome.banner?.items} />
                    <NewRelease data={dataHome.newRelease} />
                    <PlayLists title={dataHome.chillPlaylists.title} data={dataHome.chillPlaylists.items} />
                    <PlayLists title={dataHome.remixPlaylists.title} data={dataHome.remixPlaylists.items} />
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

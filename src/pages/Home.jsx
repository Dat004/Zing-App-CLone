import { useEffect, useState } from 'react';
import SliderBanner from '../components/SliderBanner';
import apiService from '../apiProvider';
import NewRelease from '../components/NewRelease';

function Home() {
    const [dataHome, setDataHome] = useState({
        banner: [],
        newRelease: {},
    });

    useEffect(() => {
        (async () => {
            const data = await apiService.homeApi();

            setDataHome((state) => ({ ...state, banner: data?.data?.items[0] }));
            setDataHome((state) => ({ ...state, newRelease: data?.data?.items[2]?.items }));
        })();
    }, []);

    return (
        <div className="w-full h-full mt-[70px]">
            <SliderBanner data={dataHome.banner?.items} />
            <NewRelease data={dataHome.newRelease} />
        </div>
    );
}

export default Home;

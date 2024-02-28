import { useEffect, useState } from 'react';
import SliderBanner from '../components/SliderBanner';
import apiService from '../apiProvider';

function Home() {
    const [dataHome, setDataHome] = useState({
        banner: [],
    });

    useEffect(() => {
        (async () => {
            const data = await apiService.homeApi();

            setDataHome((state) => ({ ...state, banner: data?.data?.items[0] }));
        })();
    }, []);

    return (
        <div className="w-full h-full mt-[70px]">
            <SliderBanner data={dataHome.banner?.items} />
        </div>
    );
}

export default Home;

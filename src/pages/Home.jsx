import { useEffect, useState } from 'react';
import SliderBanner from '../components/SliderBanner';
import apiService from '../apiProvider';

function Home() {
    const [dataHome, setDataHome] = useState({});

    useEffect(() => {
        (async () => {
            const data = await apiService.homeApi();

            console.log(data);
        })();
    }, []);

    return (
        <div className="w-full h-full mt-[70px]">
            <SliderBanner />
        </div>
    );
}

export default Home;

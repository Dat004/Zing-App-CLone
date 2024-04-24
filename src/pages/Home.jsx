import { useEffect, useState } from 'react';

import PlaylistSkeleton from '../components/SkeletonLoading/PlaylistSkeleton';
import PageLoader from '../layout/DefaultComponents/PageLoader';
import SkeletonLoading from '../components/SkeletonLoading';
import HomeScreen from '../screens/HomeScreen';
import { useLoadingState } from '../hooks';
import apiService from '../services';

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
                <HomeScreen dataHome={dataHome} />
            )}
        </div>
    );
}

export default Home;

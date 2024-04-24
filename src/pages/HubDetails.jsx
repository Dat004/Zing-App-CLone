import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import PlaylistSkeleton from '../components/SkeletonLoading/PlaylistSkeleton';
import PageLoader from '../layout/DefaultComponents/PageLoader';
import SkeletonLoading from '../components/SkeletonLoading';
import HubDetailsScreen from '../screens/HubDetailsScreen';
import { useLoadingState } from '../hooks';
import apiService from '../services';

function HubDetails() {
    const { idHub } = useParams();
    const { isLoading, handleSetLoadingState } = useLoadingState();

    const [newData, setNewData] = useState({});

    useEffect(() => {
        (async () => {
            handleSetLoadingState(true);
            const data = await apiService.hubDetailsApi(idHub);

            if (data.Error?.isError) {
                handleSetLoadingState(true);
            } else {
                handleSetLoadingState(false);

                setNewData({ ...data?.data?.data });
            }
        })();
    }, [idHub]);

    return (
        <div className="mt-[70px]">
            {isLoading ? (
                <PageLoader className="!mt-0" isMaskLayer>
                    <div className="relative w-full pb-[30%]">
                        <div className="absolute inset-0">
                            <SkeletonLoading />
                        </div>
                    </div>
                    <div className="flex items-center mx-[-14px] LM:mx-[-12px] mt-[30px]">
                        {Array.from([1, 2]).map((_, index) => (
                            <div key={index} className="w-1/2 px-[14px] LM:px-[12px] flex-shrink-0">
                                <div className="relative w-full pb-[29%]">
                                    <div className="absolute inset-0">
                                        <SkeletonLoading />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-[30px]">
                        <PlaylistSkeleton />
                    </div>
                </PageLoader>
            ) : (
                <HubDetailsScreen data={newData} />
            )}
        </div>
    );
}

export default HubDetails;

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import ThumbnailSkeleton from '../components/SkeletonLoading/ThumbnailSkeleton';
import CardMusicSkeleton from '../components/SkeletonLoading/CardMusicSkeleton';
import PageLoader from '../layout/DefaultComponents/PageLoader';
import SkeletonLoading from '../components/SkeletonLoading';
import PlaylistScreen from '../screens/PlaylistScreen';
import { useLoadingState } from '../hooks';
import apiService from '../services';

function Playlist() {
    const [newData, setNewData] = useState({});
    const { idplaylist } = useParams();
    const { isLoading, handleSetLoadingState } = useLoadingState();

    useEffect(() => {
        (async () => {
            handleSetLoadingState(true);
            const data = await apiService.detailsPlaylist(idplaylist);
            const sectionData = await apiService.sectionPlaylist(idplaylist);

            if (data.Error?.isError) {
                handleSetLoadingState(true);
            } else {
                handleSetLoadingState(false);
                setNewData((prev) => ({ ...prev, ...data?.data?.data, ...sectionData?.data }));
            }
        })();
    }, [idplaylist]);

    return (
        <div className="w-full mt-[70px]">
            <div className="pt-[40px]">
                {isLoading ? (
                    <PageLoader className="!mt-0" isMaskLayer>
                        <div className="flex LS:flex-col">
                            <div className="flex flex-col LS:flex-row LS:w-full LS:pb-[30px] w-[300px] flex-shrink-0">
                                <ThumbnailSkeleton
                                    className="LS:size-size-2.0 mr-[20px]"
                                    borderRadius="8px"
                                    extraLargeSize
                                />
                                <div className="flex flex-col LS:justify-between mt-[15px] flex-grow LS:mt-0">
                                    <div className="flex flex-col items-center LS:items-start">
                                        <div className="w-full max-w-[80%] h-[20px]">
                                            <SkeletonLoading />
                                        </div>
                                        <div className="w-full max-w-[60%] h-[10px]">
                                            <SkeletonLoading className="mt-[15px]" />
                                        </div>
                                        <div className="w-full max-w-[60%] mt-[15px] h-[10px]">
                                            <SkeletonLoading className="mt-[15px]" />
                                        </div>
                                    </div>
                                    <div className="flex justify-center LS:justify-start mt-[40px] LS:mt-0">
                                        <div className="flex flex-col LS:flex-row items-center gap-[12px]">
                                            <div className="w-[150px] h-[35px]">
                                                <SkeletonLoading className="!rounded-[999px]" />
                                            </div>
                                            <div className="flex gap-[10px]">
                                                <div className="w-[35px] h-[35px]">
                                                    <SkeletonLoading className="!rounded-[50%]" />
                                                </div>
                                                <div className="w-[35px] h-[35px]">
                                                    <SkeletonLoading className="!rounded-[50%]" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-grow flex-shrink w-full ml-[30px] LS:ml-0">
                                <CardMusicSkeleton />
                            </div>
                        </div>
                    </PageLoader>
                ) : (
                    <>
                        <PlaylistScreen data={newData} />
                    </>
                )}
            </div>
        </div>
    );
}

export default Playlist;

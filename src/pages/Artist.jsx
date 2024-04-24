import { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';

import ThumbnailSkeleton from '../components/SkeletonLoading/ThumbnailSkeleton';
import CardMusicSkeleton from '../components/SkeletonLoading/CardMusicSkeleton';
import PageLoader from '../layout/DefaultComponents/PageLoader';
import SkeletonLoading from '../components/SkeletonLoading';
import ArtistScreen from '../screens/ArtistScreen';
import { useLoadingState } from '../hooks';
import apiService from '../services';

function Artist() {
    const { nameArtist } = useParams();
    const { isLoading, handleSetLoadingState } = useLoadingState();

    const noCover = 'https://zmp3-static.zmdcdn.me/skins/zmp3-v5.2/images/default_cover.png';

    const [newData, setNewData] = useState({
        cover: {
            coverImage: '',
            isCover: false,
        },
        newRelease: undefined,
        avatar: '',
    });

    useEffect(() => {
        if (!nameArtist) return;

        (async () => {
            handleSetLoadingState(true); // Update loading state when nameArtist change
            const data = await apiService.detailsArtistApi(nameArtist);

            if (data.Error?.isError) {
                handleSetLoadingState(true);
            } else {
                setNewData((prev) => ({
                    ...prev,
                    ...data?.data?.data,
                    cover: {
                        coverImage: data?.data?.data?.cover,
                        isCover: !(data?.data?.data?.cover === noCover),
                    },
                    newRelease: data?.data?.data?.topAlbum ? { ...data?.data?.data?.topAlbum } : undefined,
                    avatar: data?.data?.data?.thumbnailM,
                }));
                handleSetLoadingState(false);
            }
        })();
    }, [nameArtist]);

    return (
        <Fragment>
            {isLoading ? (
                <PageLoader isMaskLayer>
                    <div className="flex justify-between pb-[24px] mb-[30px] mx-[-14px] LM:mx-[-12px]">
                        <div className="flex items-center w-[58.3333%] px-[14px] LM:px-[12px]">
                            <ThumbnailSkeleton className="mr-[10px]" smallMediumSize circle />
                            <div className="flex-grow flex-shrink">
                                <div className="w-full h-[54px]">
                                    <SkeletonLoading />
                                </div>
                                <div className="flex items-center mx-[-14px] LM:mx-[-12px] mt-[30px]">
                                    <div className="px-[14px] LM:px-[12px] flex-grow flex-shrink">
                                        <div className="w-full h-[14px]">
                                            <SkeletonLoading />
                                        </div>
                                    </div>
                                    <div className="px-[14px] LM:px-[12px] flex-grow flex-shrink">
                                        <div className="w-full h-[14px]">
                                            <SkeletonLoading />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-grow flex-shrink items-end justify-end gap-[10px] px-[14px] LM:px-[12px]">
                            <ThumbnailSkeleton smallSize />
                            <ThumbnailSkeleton smallSize />
                        </div>
                    </div>
                    <div className="pb-[24px] pl-[60px]">
                        <div className="flex items-start mx-[-14px] LM:mx-[-12px]">
                            <div className="w-1/3 flex-shrink-0 px-[14px] LM:px-[12px]">
                                <div className="h-[30px] w-[80%] flex-shrink-0 mb-[30px]">
                                    <SkeletonLoading />
                                </div>
                                <div className="flex mx-[-14px] LM:mx-[-12px] items-start">
                                    <div className="flex-shrink-0 px-[14px] LM:px-[12px]">
                                        <ThumbnailSkeleton mediumSize />
                                    </div>
                                    <div className="flex-shrink flex-grow px-[14px] LM:px-[12px]">
                                        <div className="flex flex-col justify-start gap-[4px]">
                                            <div className="w-full max-w-[30px] h-[24px]">
                                                <SkeletonLoading />
                                            </div>
                                            <div className="w-full h-[24px]">
                                                <SkeletonLoading />
                                            </div>
                                            <div className="w-full h-[24px]">
                                                <SkeletonLoading />
                                            </div>
                                            <div className="w-full max-w-[100px] h-[24px]">
                                                <SkeletonLoading />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-grow px-[14px] LM:px-[12px] flex-shrink-0">
                                <div className="w-full max-w-[250px] h-[30px] mb-[30px] flex-shrink">
                                    <SkeletonLoading />
                                </div>
                                <div className="flex flex-col gap-[4px]">
                                    {Array.from([1, 2, 3]).map((_, index) => (
                                        <div key={index} className="w-full h-[36px]">
                                            <SkeletonLoading />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="mt-[40px]">
                            <div className="w-full max-w-[250px] h-[30px] mb-[30px] flex-shrink">
                                <SkeletonLoading />
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <ThumbnailSkeleton largeSize />
                                </div>
                                <div className="flex-shrink flex-grow pl-[10px] w-full">
                                    <CardMusicSkeleton countData={[1, 2, 3, 4, 5]} />
                                </div>
                            </div>
                        </div>
                    </div>
                </PageLoader>
            ) : (
                <ArtistScreen data={newData} />
            )}
        </Fragment>
    );
}

export default Artist;

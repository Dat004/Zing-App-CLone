import { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import PlaylistSkeleton from '../components/SkeletonLoading/PlaylistSkeleton';
import PageLoader from '../layout/DefaultComponents/PageLoader';
import SkeletonLoading from '../components/SkeletonLoading';
import { ImageCard, MusicCard } from '../components/Card';
import BoxContent from '../components/BoxContent';
import PlayLists from '../components/PlayLists';
import { useLoadingState } from '../hooks';
import apiService from '../apiProvider';
import MV from '../components/MV';

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
                // Show Banner
                <>
                    <div className="mx-[-59px] XM:px-[-29px]">
                        <div className="relative pb-[30%]">
                            <div className="absolute inset-0">
                                <ImageCard borderRadius="0px" src={newData?.cover} />
                            </div>
                        </div>
                    </div>
                    {/* Show items in the hub detail page */}
                    {!!newData?.sections &&
                        newData?.sections?.map((items, index) => {
                            const isTitle = !!items?.title;
                            const isPlaylist = items?.sectionType === 'playlist';
                            const isArtist = items?.sectionType === 'artist';
                            const isSong = items?.sectionType === 'song';
                            const isMV = items?.sectionType === 'video';

                            // Get data to display in columns
                            let col1, col2, col3;

                            if (isSong) {
                                col1 = [...items?.items?.splice(0, 5)];
                                col2 = [...items?.items?.splice(0, 5)];
                                col3 = [...items?.items?.splice(0, 5)];
                            }

                            return (
                                <Fragment key={index}>
                                    {(isPlaylist || isArtist) && (
                                        <PlayLists
                                            data={items?.items}
                                            title={items?.title}
                                            isTypeArtist={isArtist}
                                            isHeader={isTitle}
                                            isShowTitlePlaylist
                                            isShowArtists
                                        />
                                    )}
                                    {isMV && (
                                        <BoxContent title={items?.title} isHeader={isTitle}>
                                            <div className="flex items-center mx-[-14px] LM:mx-[-12px] overflow-hidden">
                                                {items?.items?.map((video, id) => (
                                                    <div
                                                        className="w-1/3 XM:w-1/2 flex-shrink-0 px-[14px] LM:px-[12px]"
                                                        key={id}
                                                    >
                                                        <MV data={video} isAvatar />
                                                    </div>
                                                ))}
                                            </div>
                                        </BoxContent>
                                    )}
                                    {isSong && (
                                        <BoxContent title={items?.title} isHeader={isTitle}>
                                            <div className="flex items-center mx-[-14px] LM:mx-[-12px] overflow-hidden">
                                                <div className="w-1/3 L:w-1/2 flex-shrink-0 px-[14px] LM:px-[12px]">
                                                    <MusicCard data={col1} />
                                                </div>
                                                <div className="w-1/3 L:w-1/2 flex-shrink-0 px-[14px] LM:px-[12px]">
                                                    <MusicCard data={col2} />
                                                </div>
                                                <div className="w-1/3 L:w-1/2 flex-shrink-0 px-[14px] LM:px-[12px]">
                                                    <MusicCard data={col3} />
                                                </div>
                                            </div>
                                        </BoxContent>
                                    )}
                                </Fragment>
                            );
                        })}
                </>
            )}
        </div>
    );
}

export default HubDetails;

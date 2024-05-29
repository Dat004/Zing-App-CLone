import { useState, useEffect, Fragment } from 'react';

import CardMusicSkeleton from '../components/SkeletonLoading/CardMusicSkeleton';
import PageLoader from '../layout/DefaultComponents/PageLoader';
import MusicActions from '../redux/actions/MusicActions';
import { PlayBoldIcon } from '../components/CustomIcon';
import { MusicCards } from '../components/Card';
import { useLoadingState } from '../hooks';
import apiService from '../services';

function NewRelease() {
    const { ADD_PLAYLIST, ADD_MUSIC_TO_HISTORY } = MusicActions();
    const [newData, setNewData] = useState({});

    const { isLoading, handleSetLoadingState } = useLoadingState();

    useEffect(() => {
        (async () => {
            const data = await apiService.newReleaseApi();
            if (data.Error?.isError) {
                handleSetLoadingState(true);
            } else {
                setNewData({ ...data?.data?.data });
                handleSetLoadingState(false);
            }
        })();
    }, []);

    const handleGetData = (data, id) => {
        const index = data.findIndex((items) => items.encodeId === id);

        ADD_PLAYLIST(data, index);
        ADD_MUSIC_TO_HISTORY();
    };

    return (
        <div className="mt-[70px]">
            <div className="pt-[40px]">
                <header className="flex items-center mb-[32px]">
                    <h3 className="text-[40px] leading-[1.225] font-bold text-purple-text-primary">
                        {newData?.title ?? 'BXH Nhạc Mới'}
                    </h3>
                    <i className="ml-[10px] hover:opacity-90 cursor-pointer">
                        <PlayBoldIcon />
                    </i>
                </header>
                {isLoading ? (
                    <PageLoader isMaskLayer className="!mt-0">
                        <CardMusicSkeleton />
                    </PageLoader>
                ) : (
                    <Fragment>
                        <div className="mb-[20px]">
                            {newData?.items?.map((items, index) => (
                                <MusicCards
                                    onGetMusic={() => handleGetData(newData?.items, items?.encodeId)}
                                    className="size-size-0.4"
                                    id={index}
                                    key={index}
                                    data={items}
                                    isShowRanking
                                    isShowLeftCard
                                    isShowSeparator
                                    isShowRightCard
                                    isShowNameAlbum
                                    isShowStateRanking
                                    isShowDurationTimeMusic
                                />
                            ))}
                        </div>
                    </Fragment>
                )}
            </div>
        </div>
    );
}

export default NewRelease;

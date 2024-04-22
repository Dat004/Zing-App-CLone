import { useState, useEffect, Fragment } from 'react';

import CardMusicSkeleton from '../components/SkeletonLoading/CardMusicSkeleton';
import PageLoader from '../layout/DefaultComponents/PageLoader';
import { PlayBoldIcon } from '../components/CustomIcon';
import { MusicCard } from '../components/Card';
import { useLoadingState } from '../hooks';
import apiService from '../services';

function NewRelease() {
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
                            <MusicCard isShowRankingNumber isShowAlbum data={newData?.items} />
                        </div>
                    </Fragment>
                )}
            </div>
        </div>
    );
}

export default NewRelease;

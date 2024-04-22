import { useState, useEffect, Fragment } from 'react';

import PlaylistSkeleton from '../components/SkeletonLoading/PlaylistSkeleton';
import PageLoader from '../layout/DefaultComponents/PageLoader';
import SkeletonLoading from '../components/SkeletonLoading';
import { Top100Banner } from '../components/CustomIcon';
import Playlists from '../components/PlayLists';
import { useLoadingState } from '../hooks';
import apiService from '../services';

function Top100() {
    const [newData, setNewData] = useState([]);
    const { isLoading, handleSetLoadingState } = useLoadingState();

    useEffect(() => {
        (async () => {
            const data = await apiService.top100Api();
            if (data.Error?.isError) {
                handleSetLoadingState(true);
            } else {
                setNewData(data?.data?.data);
                handleSetLoadingState(false);
            }
        })();
    }, []);

    return (
        <Fragment>
            {isLoading ? (
                <PageLoader isMaskLayer>
                    <div className='w-full h-[280px] mb-[30px]'>
                        <SkeletonLoading />
                    </div>
                    <PlaylistSkeleton />
                </PageLoader>
            ) : (
                <Fragment>
                    <div className="flex items-center justify-center mt-[90px]">
                        <i>
                            <Top100Banner />
                        </i>
                    </div>
                    {newData?.map((items, index) => (
                        <Playlists
                            className={`${items?.viewType === 'slider' ? 'flex-nowrap' : 'flex-wrap'} gap-y-[30px]`}
                            key={index}
                            data={items?.items}
                            title={items?.title}
                            isHeader
                            isShowArtists
                            isShowTitlePlaylist
                        />
                    ))}
                </Fragment>
            )}
        </Fragment>
    );
}

export default Top100;

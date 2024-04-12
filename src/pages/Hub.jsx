import { useState, useEffect } from 'react';

import BoxContent from '../components/BoxContent';
import CustomLink from '../components/CustomLink';
import CardImage from '../components/CardImage';
import PlayLists from '../components/PlayLists';
import HubItems from '../components/HubItems';
import { useLoadingState } from '../hooks';
import apiService from '../apiProvider';

function Hub() {
    const [data, setData] = useState({
        banners: {
            data: [],
            randomBannerId: {},
        },
        hubItems: {
            featured: {},
            nations: [],
            topic: [],
        },
        playlists: [],
    });
    const { isLoading, handleSetLoadingState } = useLoadingState();

    useEffect(() => {
        (async () => {
            const data = await apiService.hubApi();

            if (data.Error?.isError) {
                handleSetLoadingState(true);
            } else {
                setData((prev) => ({
                    ...prev,
                    banners: {
                        data: [...data?.data?.data?.banners],
                        randomBannerId: Math.max(
                            0,
                            Math.min(
                                Math.round(Math.random() * data?.data?.data?.banners?.length - 1),
                                data?.data?.data?.banners?.length - 1,
                            ),
                        ),
                    },
                    hubItems: {
                        featured: { ...data?.data?.data?.featured },
                        nations: [...data?.data?.data?.nations],
                        topic: [...data?.data?.data?.topic],
                    },
                    playlists: [...data?.data?.data?.genre],
                }));

                handleSetLoadingState(false);
            }
        })();
    }, []);

    return (
        <div className="mt-[70px]">
            {isLoading ? null : (
                <div className="w-full">
                    <div className="pt-[20px]">
                        <div className="w-full rouded-[4px]">
                            {/* Get the links */}
                            <CustomLink to={data.banners.data[data.banners.randomBannerId]?.link?.split('.')[0]}>
                                {/* Show any background by the randomId */}
                                <CardImage
                                    src={data.banners.data[data.banners.randomBannerId]?.cover}
                                    className="h-0 pb-[29.1%]"
                                />
                            </CustomLink>
                        </div>
                    </div>
                    {/* Show hub items */}
                    <BoxContent title={data.hubItems.featured?.title} isHeader>
                        <div className="flex items-center mx-[-14px] LM:mx-[-12px]">
                            {data.hubItems.featured?.items?.map((items, index) => (
                                // If has playlists then show thumbnail in hub items
                                <div
                                    key={index}
                                    className="w-1/4 XM:!w-1/2 ML:w-1/3 flex-shrink-0 px-[14px] LM:px-[12px]"
                                >
                                    <HubItems data={items} isShowThumbnail={!!items?.playlists ? true : false} />
                                </div>
                            ))}
                        </div>
                    </BoxContent>
                    {/* Show hub items */}
                    <BoxContent title="Quốc gia" isHeader>
                        <div className="flex items-center mx-[-14px] LM:mx-[-12px]">
                            {data.hubItems.nations?.map((items, index) => (
                                // If has playlists then show thumbnail in hub items
                                <div
                                    key={index}
                                    className="w-1/4 XM:!w-1/2 ML:w-1/3 flex-shrink-0 px-[14px] LM:px-[12px]"
                                >
                                    <HubItems data={items} isShowThumbnail={!!items?.playlists ? true : false} />
                                </div>
                            ))}
                        </div>
                    </BoxContent>
                    {/* Show hub items */}
                    <BoxContent title="Tâm Trạng Và Hoạt Động" isHeader>
                        <div className="flex items-center mx-[-14px] LM:mx-[-12px]">
                            {data.hubItems.topic?.map((items, index) => (
                                // If has playlists then show thumbnail in hub items
                                <div
                                    key={index}
                                    className="w-1/4 XM:!w-1/2 ML:w-1/3 flex-shrink-0 px-[14px] LM:px-[12px]"
                                >
                                    <HubItems data={items} isShowThumbnail={!!items?.playlists ? true : false} />
                                </div>
                            ))}
                        </div>
                    </BoxContent>
                    {/* Show playlists */}
                    {data.playlists?.map((items, index) => {
                        // Get the links
                        const getPathName = items?.link?.split('.')[0];

                        return (
                            <PlayLists
                                key={index}
                                isHeader={!!items?.title ? true : false}
                                data={items?.playlists}
                                title={items?.title}
                                to={getPathName}
                                isShowTitlePlaylist
                                isShowArtists
                                isSeeAll
                            />
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default Hub;

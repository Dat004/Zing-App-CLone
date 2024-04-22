import { useState, useEffect, useRef } from 'react';

import BoxContent from '../components/BoxContent';
import CustomLink from '../components/CustomLink';
import PlayLists from '../components/PlayLists';
import { ImageCard } from '../components/Card';
import HubItems from '../components/HubItems';
import { useLoadingState } from '../hooks';
import Button from '../components/Button';
import apiService from '../services';

function Hub() {
    const hubsRef = useRef([]);
    const [data, setData] = useState({
        banners: {
            data: [],
            randomBannerId: {},
        },
        hubItems: [],
        playlists: [],
    });
    const { isLoading, handleSetLoadingState } = useLoadingState();

    // const handleCheckItems = () => {
    //     hubsRef.current?.map((hub) => {
    //         const scrollWidth = Number(hub.scrollWidth);
    //         const clientWidth = Number(hub.clientWidth);

    //         if(clientWidth === scrollWidth) {
    //             setIsShowBtn(false);
    //         }
    //         if(clientWidth < scrollWidth) {
    //             setIsShowBtn(true);
    //         }
    //     });
    // };

    // useEffect(() => {
    //     if (hubsRef.current) {
    //         handleCheckItems();
    //     }
    // }, [hubsRef.current, isLoading]);

    // useEffect(() => {
    //     if (hubsRef.current) {
    //         window.addEventListener('resize', handleCheckItems);
    //     }

    //     return () => {
    //         if (hubsRef.current) {
    //             window.removeEventListener('resize', handleCheckItems);
    //         }
    //     };
    // }, []);

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
                    hubItems: [
                        // Create value and spread value
                        { items: [...data?.data?.data?.featured?.items], title: data?.data?.data?.featured?.title },
                        {
                            items: [...data?.data?.data?.nations],
                            title: data?.data?.data?.nations?.title || 'Quốc gia',
                        },
                        {
                            items: [...data?.data?.data?.topic],
                            title: data?.data?.data?.topic?.title || 'Tâm Trạng Và Hoạt Động',
                        },
                    ],
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
                                <ImageCard
                                    src={data.banners.data[data.banners.randomBannerId]?.cover}
                                    className="h-0 pb-[29.1%]"
                                />
                            </CustomLink>
                        </div>
                    </div>
                    {/* Show hub items */}
                    {data.hubItems?.map((items, index) => (
                        <BoxContent title={items?.title} key={index} isHeader={!!items.title ? true : false}>
                            <div
                                ref={(ref) => (hubsRef.current[index] = ref)}
                                className="flex items-center mx-[-14px] LM:mx-[-12px] overflow-hidden"
                            >
                                {items?.items?.map((value, id) => (
                                    // If has playlists then show thumbnail in hub items
                                    <div
                                        key={id}
                                        className="w-1/4 XM:!w-1/2 ML:w-1/3 flex-shrink-0 px-[14px] LM:px-[12px]"
                                    >
                                        <HubItems data={value} isShowThumbnail={!!value?.playlists ? true : false} />
                                    </div>
                                ))}
                            </div>
                            {/* If isShowBtn is true then show button handle show all hub */}
                            {/* {isShowBtn && (
                                <div className="flex items-center justify-center mt-[30px]">
                                    <Button
                                        className="py-[9px] px-[24px] text-[12px] leading-[1.25] uppercase font-semibold"
                                        small
                                        outline
                                    >
                                        Tất Cả
                                    </Button>
                                </div>
                            )} */}
                        </BoxContent>
                    ))}
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

import { Fragment } from 'react';

import { PlaylistItems, MVItems } from '../../components/Item';
import { ImageCard, MusicCards } from '../../components/Card';
import BoxContent from '../../components/BoxContent';

function HubDetailsScreen({ data = {} }) {
    return (
        <>
            {/* Show banner */}
            <div className="mx-[-59px] XM:px-[-29px]">
                <div className="relative pb-[30%]">
                    <div className="absolute inset-0">
                        <ImageCard borderRadius="0px" src={data?.cover} />
                    </div>
                </div>
            </div>
            {/* Show items in the hub detail page */}
            {!!data?.sections &&
                data?.sections?.map((items, index) => {
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
                                <PlaylistItems
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
                                                <MVItems data={video} isAvatar />
                                            </div>
                                        ))}
                                    </div>
                                </BoxContent>
                            )}
                            {isSong && (
                                <BoxContent title={items?.title} isHeader={isTitle}>
                                    <div className="flex items-center mx-[-14px] LM:mx-[-12px] overflow-hidden">
                                        <div className="w-1/3 L:w-1/2 flex-shrink-0 px-[14px] LM:px-[12px]">
                                            <MusicCards
                                                className="size-size-0.4"
                                                data={col1}
                                                smallCard
                                                isShowRightCard
                                                isShowDurationTimeMusic
                                            />
                                        </div>
                                        <div className="w-1/3 L:w-1/2 flex-shrink-0 px-[14px] LM:px-[12px]">
                                            <MusicCards
                                                className="size-size-0.4"
                                                data={col2}
                                                smallCard
                                                isShowRightCard
                                                isShowDurationTimeMusic
                                            />
                                        </div>
                                        <div className="w-1/3 L:w-1/2 flex-shrink-0 px-[14px] LM:px-[12px]">
                                            <MusicCards
                                                className="size-size-0.4"
                                                data={col3}
                                                smallCard
                                                isShowRightCard
                                                isShowDurationTimeMusic
                                            />
                                        </div>
                                    </div>
                                </BoxContent>
                            )}
                        </Fragment>
                    );
                })}
        </>
    );
}

export default HubDetailsScreen;

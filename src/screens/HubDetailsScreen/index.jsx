import { Fragment } from 'react';

import { PlaylistItems, MVItems } from '../../components/Item';
import { ImageCard, MusicCards } from '../../components/Card';
import MusicActions from '../../redux/actions/MusicActions';
import BoxContent from '../../components/BoxContent';

function HubDetailsScreen({ data = {} }) {
    const { ADD_PLAYLIST, ADD_MUSIC_TO_HISTORY } = MusicActions();

    const handleGetData = (data, id) => {
        const index = data.findIndex(items => items.encodeId === id);

        ADD_PLAYLIST(data, index);
        ADD_MUSIC_TO_HISTORY();
    };

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
                    const sliderPlaylist = items?.viewType === 'slider';
                    const listPlaylist = items?.viewType === 'list';

                    // Get data to display in columns
                    let col1, col2, col3;

                    if (isSong) {
                        col1 = [...items?.items?.slice(0, 5)];
                        col2 = [...items?.items?.slice(5, 10)];
                        col3 = [...items?.items?.slice(10, 15)];
                    }

                    return (
                        <Fragment key={index}>
                            {(isPlaylist || isArtist) && (
                                <BoxContent title={items?.title} isHeader={isTitle}>
                                    <PlaylistItems
                                        className={`${
                                            sliderPlaylist
                                                ? 'flex-nowrap'
                                                : listPlaylist
                                                ? 'flex-wrap gap-y-[30px]'
                                                : 'flex-nowrap'
                                        }`}
                                        data={items?.items}
                                        isTypeArtist={isArtist}
                                        isShowTitlePlaylist
                                        isShowArtists
                                    />
                                </BoxContent>
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
                                            {col1?.map((value, index) => (
                                                <MusicCards
                                                    onGetMusic={() => handleGetData(items?.items, value?.encodeId)}
                                                    className="size-size-0.4"
                                                    id={index}
                                                    key={index}
                                                    data={value}
                                                    smallCard
                                                    isShowRightCard
                                                    isShowDurationTimeMusic
                                                />
                                            ))}
                                        </div>
                                        <div className="w-1/3 L:w-1/2 flex-shrink-0 px-[14px] LM:px-[12px]">
                                            {col2?.map((value, index) => (
                                                <MusicCards
                                                    onGetMusic={() => handleGetData(items?.items, value?.encodeId)}
                                                    className="size-size-0.4"
                                                    id={index}
                                                    key={index}
                                                    data={value}
                                                    smallCard
                                                    isShowRightCard
                                                    isShowDurationTimeMusic
                                                />
                                            ))}
                                        </div>
                                        <div className="w-1/3 L:w-1/2 flex-shrink-0 px-[14px] LM:px-[12px]">
                                            {col3?.map((value, index) => (
                                                <MusicCards
                                                    onGetMusic={() => handleGetData(items?.items, value?.encodeId)}
                                                    className="size-size-0.4"
                                                    id={index}
                                                    key={index}
                                                    data={value}
                                                    smallCard
                                                    isShowRightCard
                                                    isShowDurationTimeMusic
                                                />
                                            ))}
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

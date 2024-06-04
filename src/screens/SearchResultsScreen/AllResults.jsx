import PropTypes from 'prop-types';

import InformationCard from '../../components/Card/MusicCards/InformationCard';
import { MusicCards, ImageCard, TitleCard } from '../../components/Card';
import { PlaylistItems, MVItems } from '../../components/Item';
import MusicActions from '../../redux/actions/MusicActions';
import BoxContent from '../../components/BoxContent';
import CustomLink from '../../components/CustomLink';
import ContainerMessage from './ContainerMessage';
import images from '../../assets/images';

function AllResults({ data = {} }) {
    const { ADD_PLAYLIST } = MusicActions();

    const NO_DATA = {
        background: images.noResultSearch,
        title: 'Không có kết quả được tìm thấy',
    };

    const mutipleCards = data?.songs?.length > 3;
    const littleCards = data?.songs?.length <= 3;

    const ALL_EMTY_DATA =
        !!data?.topSuggest?.length ||
        !!data?.songs?.length ||
        !!data?.playlists?.length ||
        !!data?.videos?.length ||
        !!data?.videos?.length ||
        !!data?.artists?.length;

    const handleGetData = (data, id) => {
        const index = data.findIndex((items) => items.encodeId === id);

        ADD_PLAYLIST(data, index);
    };

    return (
        <>
            {!ALL_EMTY_DATA && (
                <BoxContent className="!mt-[30px] !gap-[10px]" title="Tất Cả" isHeader>
                    <ContainerMessage logo={NO_DATA.background} message={NO_DATA.title} />
                </BoxContent>
            )}
            {!!data?.songs?.length && (
                <>
                    <BoxContent className="!mt-[30px]" title="Nổi Bật" isHeader>
                        <div className="flex items-center mx-[-14px] LM:mx-[-12px] overflow-hidden">
                            {data?.top?.objectType === 'artist' ? (
                                <>
                                    {data?.artists
                                        ?.filter((items) => items?.id === data?.top?.id)
                                        ?.map((items, index) => (
                                            <div
                                                className="w-1/3 LX:w-1/2 px-[14px] LM:px-[12px] flex-shrink-0"
                                                key={index}
                                            >
                                                <div className="w-full bg-purple-bg-box-hot hover:bg-purple-bg-blur-color p-[10px] rounded-[5px]">
                                                    <InformationCard
                                                        className="size-[84px]"
                                                        data={items}
                                                        isShowTypeCard
                                                        isArtistCard
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                </>
                            ) : (
                                <div className="w-1/3 LX:w-1/2 px-[14px] LM:px-[12px] flex-shrink-0">
                                    <div className="w-full bg-purple-bg-box-hot hover:bg-purple-bg-blur-color p-[10px] rounded-[5px]">
                                        <InformationCard
                                            className="size-[84px]"
                                            data={data?.top}
                                            isShowTypeCard
                                            isSongCard={data?.top?.objectType === 'song'}
                                            isHubCard={data?.top?.objectType === 'hub'}
                                            isPlaylistCard={data?.top?.objectType === 'playlist'}
                                        />
                                    </div>
                                </div>
                            )}
                            {data?.songs?.slice(0, 2)?.map((items, index) => (
                                <div className="w-1/3 LX:w-1/2 px-[14px] LM:px-[12px] flex-shrink-0" key={index}>
                                    <div className="w-full bg-purple-bg-box-hot hover:bg-purple-bg-blur-color p-[10px] rounded-[5px]">
                                        <InformationCard
                                            className="size-[84px]"
                                            data={items}
                                            isShowTypeCard
                                            isSongCard
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </BoxContent>
                    <BoxContent className="!mt-[30px]" title="Bài Hát" isHeader>
                        {mutipleCards && (
                            <div className="flex items-center mx-[-14px] LM:mx-[-12px]">
                                <div className="flex-grow flex-shrink px-[14px] LM:px-[12px]">
                                    {data?.songs?.slice(0, 3)?.map((items, index) => (
                                        <MusicCards
                                            onGetMusic={() => handleGetData(data?.songs, items?.encodeId)}
                                            className="size-size-0.4"
                                            id={index}
                                            key={index}
                                            data={items}
                                            smallCard
                                            isShowSeparator
                                            isShowRightCard
                                            isShowDurationTimeMusic
                                        />
                                    ))}
                                </div>
                                <div className="flex-grow flex-shrink px-[14px] LM:px-[12px]">
                                    {data?.songs?.slice(3, 6)?.map((items, index) => (
                                        <MusicCards
                                            onGetMusic={() => handleGetData(data?.songs, items?.encodeId)}
                                            className="size-size-0.4"
                                            id={index}
                                            key={index}
                                            data={items}
                                            smallCard
                                            isShowSeparator
                                            isShowRightCard
                                            isShowDurationTimeMusic
                                        />
                                    ))}
                                </div>
                            </div>
                        )}
                        {littleCards && (
                            <>
                                {data?.songs?.map((items, index) => (
                                    <MusicCards
                                        onGetMusic={() => handleGetData(data?.songs, items?.encodeId)}
                                        className="size-size-0.4"
                                        id={index}
                                        key={index}
                                        data={items}
                                        isShowSeparator
                                        isShowRightCard
                                        isShowNameAlbum
                                        isShowDurationTimeMusic
                                    />
                                ))}
                            </>
                        )}
                    </BoxContent>
                </>
            )}
            {!!data?.topSuggest?.length && (
                <div className="mt-[48px]">
                    <section className="w-full flex items-center mb-[20px]">
                        <div className="size-[50px] flex-shrink-0 flex-grow-0 mr-[10px] overflow-hidden rounded-[4px]">
                            <CustomLink to={data?.top?.link?.split('.')[0]}>
                                <ImageCard isScale src={data?.top?.thumbnailM} />
                            </CustomLink>
                        </div>
                        <div className="flex-grow flex-shrink w-0 pr-[10px]">
                            <h3 className="text-[14px] text-purple-text-items font-medium uppercase">
                                Playlist Nổi Bật
                            </h3>
                            <TitleCard to={data?.top?.link?.split('.')[0]} className="mt-[5px] text-[18px] font-bold">
                                {data?.top?.title || data?.top?.name}
                            </TitleCard>
                        </div>
                    </section>
                    <PlaylistItems data={data?.topSuggest?.slice(0, 5)} isShowTitlePlaylist isShowArtists />
                </div>
            )}
            {!!data?.playlists?.length && (
                <BoxContent className="!mt-[30px]" title="Playlist/Album" isHeader>
                    <PlaylistItems data={data?.playlists?.slice(0, 5)} isShowTitlePlaylist isShowArtists />
                </BoxContent>
            )}
            {!!data?.videos?.length && (
                <BoxContent className="!mt-[30px]" title="MV" isHeader>
                    <div className="flex items-center mx-[-14px] LM:mx-[-12px] overflow-hidden">
                        {data?.videos?.slice(0, 3)?.map((items, index) => (
                            <div key={index} className="w-1/3 XM:w-1/2 flex-shrink-0 px-[14px] LM:px-[12px]">
                                <MVItems data={items} isAvatar />
                            </div>
                        ))}
                    </div>
                </BoxContent>
            )}
            {!!data?.artists?.length && (
                <BoxContent className="!mt-[30px]" title="Nghệ Sĩ/OA" isHeader>
                    <PlaylistItems data={data?.artists?.slice(0, 5)} isTypeArtist />
                </BoxContent>
            )}
        </>
    );
}

AllResults.propTypes = {
    data: PropTypes.object,
};

export default AllResults;

import PropTypes from 'prop-types';

import InformationCard from '../../components/Card/MusicCards/InformationCard';
import { PlaylistItems, MVItems } from '../../components/Item';
import BoxContent from '../../components/BoxContent';
import { MusicCards } from '../../components/Card';
import ContainerMessage from './ContainerMessage';
import images from '../../assets/images';

function AllResults({ data = {} }) {
    const NO_DATA = {
        background: images.noResultSearch,
        title: 'Không có kết quả được tìm thấy',
    };

    const ALL_EMTY_DATA =
        !!data?.songs?.length ||
        !!data?.playlists?.length ||
        !!data?.videos?.length ||
        !!data?.videos?.length ||
        !!data?.artists?.length;

    return (
        <>
            {!ALL_EMTY_DATA && (
                <div className="mt-[30px]">
                    <h3 className="text-[18px] text-purple-text-primary mb-[10px] font-bold">Tất Cả</h3>
                    <ContainerMessage logo={NO_DATA.background} message={NO_DATA.title} />
                </div>
            )}
            {!!data?.songs?.length && (
                <>
                    <BoxContent title="Nổi Bật" isHeader>
                        <div className="flex items-center mx-[-14px] LM:mx-[-12px]">
                            {data?.songs?.slice(0, 3)?.map((items, index) => (
                                <div className="w-1/3 px-[14px] LM:px-[12px] flex-shrink-0" key={index}>
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
                        </div>
                    </BoxContent>
                    <BoxContent title="Bài Hát" isHeader>
                        <div className="flex items-center mx-[-14px] LM:mx-[-12px]">
                            <div className="flex-grow flex-shrink px-[14px] LM:px-[12px]">
                                <MusicCards
                                    className="size-size-0.4"
                                    data={data?.songs?.slice(0, 3)}
                                    smallCard
                                    isShowRightCard
                                    isShowDurationTimeMusic
                                />
                            </div>
                            <div className="flex-grow flex-shrink px-[14px] LM:px-[12px]">
                                <MusicCards
                                    className="size-size-0.4"
                                    data={data?.songs?.slice(3, 6)}
                                    smallCard
                                    isShowRightCard
                                    isShowDurationTimeMusic
                                />
                            </div>
                        </div>
                    </BoxContent>
                </>
            )}
            {!!data?.playlists?.length && (
                <PlaylistItems
                    data={data?.playlists?.slice(0, 5)}
                    title="Playlist/Album"
                    isShowTitlePlaylist
                    isShowArtists
                    isHeader
                />
            )}
            {!!data?.videos?.length && (
                <BoxContent title="MV" isHeader>
                    <div className="flex items-center mx-[-14px] LM:mx-[-12px]">
                        {data?.videos?.slice(0, 3)?.map((items, index) => (
                            <div key={index} className="w-1/3 flex-shrink-0 px-[14px] LM:px-[12px]">
                                <MVItems data={items} isAvatar />
                            </div>
                        ))}
                    </div>
                </BoxContent>
            )}
            {!!data?.artists?.length && (
                <PlaylistItems data={data?.artists?.slice(0, 5)} title="Nghệ Sĩ/OA" isTypeArtist isHeader />
            )}
        </>
    );
}

AllResults.propTypes = {
    data: PropTypes.object,
};

export default AllResults;

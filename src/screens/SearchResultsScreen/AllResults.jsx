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
                <BoxContent className="!mt-[30px] !gap-[10px]" title="Tất Cả" isHeader>
                    <ContainerMessage logo={NO_DATA.background} message={NO_DATA.title} />
                </BoxContent>
            )}
            {!!data?.songs?.length && (
                <>
                    <BoxContent className="!mt-[30px]" title="Nổi Bật" isHeader>
                        <div className="flex items-center mx-[-14px] LM:mx-[-12px]">
                            {data?.songs?.slice(0, 3)?.map((items, index) => (
                                <div className="w-1/3 px-[14px] LM:px-[12px] flex-shrink-0" key={index}>
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

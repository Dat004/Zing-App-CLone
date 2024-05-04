import PropTypes from 'prop-types';

import InformationCard from '../../components/Card/MusicCards/InformationCard';
import { PlaylistItems, MVItems } from '../../components/Item';
import BoxContent from '../../components/BoxContent';
import { MusicCards } from '../../components/Card';

function AllResults({ data = {} }) {
    return (
        <>
            {!!data?.songs?.length && (
                <>
                    <BoxContent title="Nổi Bật" isHeader>
                        <div className="flex items-center mx-[-14px] LM:mx-[-12px]">
                            {data?.songs?.slice(0, 3)?.map((items, index) => (
                                <div className="w-1/3 px-[14px] LM:px-[12px] flex-shrink-0" key={index}>
                                    <div className="w-full bg-purple-bg-box-hot hover:bg-purple-bg-blur-color p-[10px] rounded-[5px]">
                                        <InformationCard className="size-[84px]" data={items} />
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
            {!!data?.playlists?.length && (
                <PlaylistItems data={data?.artists?.slice(0, 5)} title="Nghệ Sĩ/OA" isTypeArtist isHeader />
            )}
        </>
    );
}

AllResults.propTypes = {
    data: PropTypes.object,
};

export default AllResults;

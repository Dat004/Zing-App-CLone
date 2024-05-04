import PropTypes from 'prop-types';

import { PlaylistItems } from '../../components/Item';
import ContainerMessage from './ContainerMessage';
import images from '../../assets/images';

function PlaylistResults({ data = [] }) {
    const NO_DATA = {
        background: images.noPlaylistSearch,
        title: 'Không có Playlist/Album được tìm thấy',
    };

    return (
        <>
            <div className="mt-[30px]">
                <h3
                    className={`${
                        !!data?.length ? 'text-[20px]' : 'text-[18px]'
                    } text-purple-text-primary font-bold mb-[10px]`}
                >
                    Playlist/Album
                </h3>
                {!!data?.length ? (
                    <PlaylistItems
                        className="flex-wrap gap-y-[30px]"
                        data={data}
                        title="Playlist/Album"
                        isHeader
                        isShowTitlePlaylist
                        isShowArtists
                    />
                ) : (
                    <ContainerMessage logo={NO_DATA.background} message={NO_DATA.title} />
                )}
            </div>
        </>
    );
}

PlaylistResults.propTypes = {
    data: PropTypes.array,
};

export default PlaylistResults;

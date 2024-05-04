import PropTypes from 'prop-types';

import { PlaylistItems } from '../../components/Item';
import BoxContent from '../../components/BoxContent';
import ContainerMessage from './ContainerMessage';
import images from '../../assets/images';

function PlaylistResults({ data = [] }) {
    const NO_DATA = {
        background: images.noPlaylistSearch,
        title: 'Không có Playlist/Album được tìm thấy',
    };

    return (
        <>
            <BoxContent className="!mt-[30px] !gap-[10px]" title="Playlist/Album" isHeader>
                {!!data?.length ? (
                    <PlaylistItems className="flex-wrap gap-y-[30px]" data={data} isShowTitlePlaylist isShowArtists />
                ) : (
                    <ContainerMessage logo={NO_DATA.background} message={NO_DATA.title} />
                )}
            </BoxContent>
        </>
    );
}

PlaylistResults.propTypes = {
    data: PropTypes.array,
};

export default PlaylistResults;

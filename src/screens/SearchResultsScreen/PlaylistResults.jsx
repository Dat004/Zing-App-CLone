import PropTypes from 'prop-types';

import { PlaylistItems } from '../../components/Item';

function PlaylistResults({ data = [] }) {
    return (
        <>
            {!!data?.length ? (
                <PlaylistItems
                    className="flex-wrap gap-y-[30px]"
                    data={data}
                    title="Playlist/Album"
                    isHeader
                    isShowTitlePlaylist
                    isShowArtists
                />
            ) : null}
        </>
    );
}

PlaylistResults.propTypes = {
    data: PropTypes.array,
};

export default PlaylistResults;

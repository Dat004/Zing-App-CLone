import PropTypes from 'prop-types';

import { PlaylistItems } from '../../components/Item';

function ArtistResults({ data = [] }) {
    return (
        <>
            {!!data?.length ? (
                <PlaylistItems className="flex-wrap gap-y-[30px]" data={data} title="Nghệ Sĩ/OA" isHeader isTypeArtist />
            ) : null}
        </>
    );
}

ArtistResults.propTypes = {
    data: PropTypes.array,
};

export default ArtistResults;

import PropTypes from 'prop-types';

import PlaylistResults from './PlaylistResults';
import ArtistResults from './ArtistResults';
import SongResults from './SongResults';
import AllResults from './AllResults';
import MVResults from './MVResults';

function SearchResultsScreen({ data = {}, tabIndex = 0 }) {
    return (
        <>
            {tabIndex === 0 && <AllResults data={data} />}
            {tabIndex === 1 && <SongResults data={data?.songs} />}
            {tabIndex === 2 && <PlaylistResults data={data?.playlists} />}
            {tabIndex === 3 && <ArtistResults data={data?.artists} />}
            {tabIndex === 4 && <MVResults data={data?.videos} />}
        </>
    );
}

SearchResultsScreen.propTypes = {
    data: PropTypes.object,
    tabIndex: PropTypes.number,
};

export default SearchResultsScreen;

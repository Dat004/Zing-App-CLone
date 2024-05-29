import PropTypes from 'prop-types';

import InformationCard from '../../../../../components/Card/MusicCards/InformationCard';

function Results({ data }) {
    return (
        <>
            {data.map((items) => {
                const { type } = items;

                const typeSong = type === 1;
                const typePlaylist = type === 3;
                const typeArtist = type === 4;
                const typeHub = type === 5;

                return (
                    <div
                        className="group/items py-[8px] px-[10px] rounded-[4px] hover:bg-purple-bg-btn-alpha"
                        key={items?.id}
                    >
                        <InformationCard
                            className="size-[52px]"
                            data={items}
                            isPlaylistCard={typePlaylist}
                            isHubCard={typeHub}
                            isSongCard={typeSong}
                            isArtistCard={typeArtist}
                        />
                    </div>
                );
            })}
        </>
    );
}

Results.propTypes = {
    data: PropTypes.array,
};

export default Results;

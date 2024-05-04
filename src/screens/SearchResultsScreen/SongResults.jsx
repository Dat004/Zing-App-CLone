import PropTypes from 'prop-types';

import BoxContent from '../../components/BoxContent';
import { MusicCards } from '../../components/Card';

function SongResults({ data = [] }) {
    return (
        <>
            {!!data?.length ? (
                <BoxContent title="Bài Hát" isHeader>
                    <MusicCards
                        className="size-size-0.4"
                        data={data}
                        isShowRightCard
                        isShowNameAlbum
                        isShowDurationTimeMusic
                    />
                </BoxContent>
            ) : null}
        </>
    );
}

SongResults.propTypes = {
    data: PropTypes.array,
};

export default SongResults;

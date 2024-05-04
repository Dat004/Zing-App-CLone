import PropTypes from 'prop-types';

import { PlaylistItems } from '../../components/Item';
import BoxContent from '../../components/BoxContent';
import ContainerMessage from './ContainerMessage';
import images from '../../assets/images';

function ArtistResults({ data = [] }) {
    const NO_DATA = {
        background: images.noArtistSearch,
        title: 'Không có Nghệ sĩ/OA được tìm thấy',
    };

    return (
        <>
            <BoxContent className="!mt-[30px] !gap-[10px]" title="Nghệ Sĩ/OA" isHeader>
                {!!data?.length ? (
                    <PlaylistItems className="flex-wrap gap-y-[30px]" data={data} isTypeArtist />
                ) : (
                    <ContainerMessage logo={NO_DATA.background} message={NO_DATA.title} />
                )}
            </BoxContent>
        </>
    );
}

ArtistResults.propTypes = {
    data: PropTypes.array,
};

export default ArtistResults;

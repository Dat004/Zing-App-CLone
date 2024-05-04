import PropTypes from 'prop-types';

import BoxContent from '../../components/BoxContent';
import { MusicCards } from '../../components/Card';
import ContainerMessage from './ContainerMessage';
import images from '../../assets/images';

function SongResults({ data = [] }) {
    const NO_DATA = {
        background: images.noMusicResult,
        title: 'Không có Bài Hát được tìm thấy',
    };

    return (
        <>
            <BoxContent className="!mt-[30px] !gap-[10px]" title="Bài Hát" isHeader>
                {!!data?.length ? (
                    <div className="w-full">
                        <MusicCards
                            className="size-size-0.4"
                            data={data}
                            isShowRightCard
                            isShowNameAlbum
                            isShowDurationTimeMusic
                        />
                    </div>
                ) : (
                    <ContainerMessage logo={NO_DATA.background} message={NO_DATA.title} />
                )}
            </BoxContent>
        </>
    );
}

SongResults.propTypes = {
    data: PropTypes.array,
};

export default SongResults;

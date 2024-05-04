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
            <div className="mt-[30px]">
                <h3
                    className={`${
                        !!data?.length ? 'text-[20px]' : 'text-[18px]'
                    } text-purple-text-primary font-bold mb-[10px]`}
                >
                    Bài Hát
                </h3>
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
                ) : (
                    <ContainerMessage logo={NO_DATA.background} message={NO_DATA.title} />
                )}
            </div>
        </>
    );
}

SongResults.propTypes = {
    data: PropTypes.array,
};

export default SongResults;

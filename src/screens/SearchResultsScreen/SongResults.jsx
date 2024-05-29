import PropTypes from 'prop-types';

import MusicActions from '../../redux/actions/MusicActions';
import BoxContent from '../../components/BoxContent';
import { MusicCards } from '../../components/Card';
import ContainerMessage from './ContainerMessage';
import images from '../../assets/images';

function SongResults({ data = [] }) {
    const { ADD_PLAYLIST, ADD_MUSIC_TO_HISTORY } = MusicActions();

    const handleGetData = (data, id) => {
        const index = data.findIndex(items => items.encodeId === id);

        ADD_PLAYLIST(data, index);
        ADD_MUSIC_TO_HISTORY();
    };

    const NO_DATA = {
        background: images.noMusicResult,
        title: 'Không có Bài Hát được tìm thấy',
    };

    return (
        <>
            <BoxContent className="!mt-[30px] !gap-[10px]" title="Bài Hát" isHeader>
                {!!data?.length ? (
                    <div className="w-full">
                        {data?.map((items, index) => (
                            <MusicCards
                                onGetMusic={() => handleGetData(data, items?.encodeId)}
                                className="size-size-0.4"
                                id={index}
                                key={index}
                                data={items}
                                isShowSeparator
                                isShowRightCard
                                isShowNameAlbum
                                isShowDurationTimeMusic
                            />
                        ))}
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

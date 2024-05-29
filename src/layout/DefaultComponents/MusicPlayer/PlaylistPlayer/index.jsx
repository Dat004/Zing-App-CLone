import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMoreHorizontal } from 'react-icons/fi';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import classNames from 'classnames';

import MusicActions from '../../../../redux/actions/MusicActions';
import TippyBox from '../../../../components/Tippy/TippyBox';
import PopperWrapper from '../../../../components/Popper';
import Button from '../../../../components/Button';
import Tippy from '../../../../components/Tippy';
import PlaylistData from './PlaylistData';

function PlaylistPlayer({ data = {}, showDefault = false, showPlaylistPlayer = false }) {
    const [active, setActive] = useState(1);
    const [showPopup, setShowPopup] = useState(false);

    const { isHasPlaylist } = data.playlistMusic;

    const {
        ADD_PLAYLIST,
        ADD_MUSIC_TO_PLAYLIST,
        ADD_MUSIC_TO_HISTORY,
        UPDATE_CURRENT_PLAYLIST_MUSIC,
        REMOVE_PLAYLIST,
        REMOVE_MUSIC_FROM_PLAYLIST,
    } = MusicActions();
    const { playlistMusic, historyMusic } = data;
    const { itemsPlaylist } = playlistMusic.dataPlaylist;
    const { currentIndexMusic, currentDataMusic } = playlistMusic.currentMusicOfPlaylist;

    const playerStyles = classNames('fixed max-h-[calc(100%-90px)]] top-0 right-0 overflow-hidden', {
        'bottom-[90px]': isHasPlaylist,
        'bottom-0': !isHasPlaylist,
    });

    const handleTogglePopup = () => {
        setShowPopup((state) => !state);
    };

    const handleDeletePlaylist = () => {
        REMOVE_PLAYLIST();
        handleTogglePopup();
    };

    const handleActionsMusic = (data, index) => {
        switch (active) {
            case 1:
                UPDATE_CURRENT_PLAYLIST_MUSIC(index, data[index]);
                ADD_MUSIC_TO_HISTORY(currentDataMusic);

                break;
            case 2:
                UPDATE_CURRENT_PLAYLIST_MUSIC(itemsPlaylist.length, data[index]);
                ADD_MUSIC_TO_PLAYLIST([data[index]]);
                ADD_MUSIC_TO_HISTORY(currentDataMusic);

                break;
            default:
                throw new Error('Invalid actions on active tab');
        }
    };

    const POPUP_PLAYER = () => (
        <PopperWrapper className="w-[250px] py-[10px]">
            <div className="w-full">
                <Button
                    onClick={handleDeletePlaylist}
                    leftIcon={
                        <i className="block pr-[7px]">
                            <MdOutlineDeleteOutline className="text-[20px]" />
                        </i>
                    }
                    className="!justify-start py-[8px] px-[15px] w-full text-[14px] text-purple-text-secondary hover:bg-purple-bg-btn-alpha"
                >
                    <span>Xóa danh sách phát</span>
                </Button>
            </div>
        </PopperWrapper>
    );

    const variants = {
        hide: { x: '100%' },
        show: { x: 0 },
    };

    return (
        <AnimatePresence>
            {((showDefault || isHasPlaylist) && showPlaylistPlayer) ? (
                <section transition="duration-500" className={playerStyles}>
                    <motion.div
                        key="playlist-player"
                        variants={variants}
                        initial="hide"
                        animate="show"
                        exit="hide"
                        transition="duration-500"
                        className="relative w-[330px] h-full bg-purple-bg-sidebar-player px-[8px] py-[4px]"
                    >
                        <div className="w-full py-[14px]">
                            <div className="flex items-center">
                                <div className="flex flex-grow flex-shrink p-[4px] bg-purple-bg-btn-alpha rounded-[999px]">
                                    <div className="flex-grow flex-shrink">
                                        <Button
                                            onClick={() => setActive(1)}
                                            className={`py-[4px] hover:text-purple-text-primary ${
                                                active === 1
                                                    ? 'bg-purple-bg-active-tab text-purple-text-primary'
                                                    : 'bg-transparent text-purple-text-secondary'
                                            } w-full border-none text-[12px] font-medium`}
                                            primary
                                        >
                                            Danh sách phát
                                        </Button>
                                    </div>
                                    <div className="flex-grow flex-shrink">
                                        <Button
                                            onClick={() => setActive(2)}
                                            className={`py-[4px] hover:text-purple-text-primary ${
                                                active === 2
                                                    ? 'bg-purple-bg-active-tab text-purple-text-primary'
                                                    : 'bg-transparent text-purple-text-secondary'
                                            } w-full border-none text-[12px] font-medium`}
                                            primary
                                        >
                                            Nghe gần đây
                                        </Button>
                                    </div>
                                </div>
                                <div className="ml-[8px]">
                                    <TippyBox content="Khác" placement="bottom" arrow offset={[0, 10]}>
                                        <Tippy
                                            visible={showPopup}
                                            onClickOutside={handleTogglePopup}
                                            offset={[0, 10]}
                                            placement="bottom-end"
                                            renderComponent={<POPUP_PLAYER />}
                                        >
                                            <Button
                                                onClick={handleTogglePopup}
                                                rounded
                                                className="size-[32px] !bg-purple-bg-btn-alpha"
                                            >
                                                <FiMoreHorizontal />
                                            </Button>
                                        </Tippy>
                                    </TippyBox>
                                </div>
                            </div>
                        </div>
                        <PlaylistData
                            data={
                                active === 1
                                    ? playlistMusic.dataPlaylist.itemsPlaylist
                                    : active === 2
                                    ? historyMusic.dataHistory
                                    : null
                            }
                            currentMusicIndex={currentIndexMusic}
                            onClick={handleActionsMusic}
                            activeTab={active}
                        />
                    </motion.div>
                </section>
            ) : null}
        </AnimatePresence>
    );
}

export default PlaylistPlayer;

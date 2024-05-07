import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMoreHorizontal } from 'react-icons/fi';

import TippyBox from '../../../../components/Tippy/TippyBox';
import Button from '../../../../components/Button';
import images from '../../../../assets/images';

function PlaylistPlayer({ showPlaylistPlayer = false }) {
    const [active, setActive] = useState(1);

    const variants = {
        hide: { x: '100%' },
        show: { x: 0 },
    };

    return (
        <AnimatePresence>
            {showPlaylistPlayer && (
                <section transition="duration-500" className="fixed bottom-[90px] top-0 right-0">
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
                                        <Button rounded className="size-[32px] !bg-purple-bg-btn-alpha">
                                            <FiMoreHorizontal />
                                        </Button>
                                    </TippyBox>
                                </div>
                            </div>
                        </div>
                        <div
                            style={{ backgroundImage: `url(${images.imageLoaderPlaylist})` }}
                            className="mt-[24px] ml-[12px] mr-[15px] opacity-50 bg-[50%] bg-no-repeat bg-cover h-[240px]"
                        ></div>
                        <div className="absolute my-[20px] top-[50%] left-0 right-0 translate-y-[-50%]">
                            <div className="px-[33px] text-center">
                                <p className="whitespace-pre-line text-[14px] leading-[1.6] text-purple-text-primary">
                                    Khám phá thêm các bài hát mới của Zing MP3
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </section>
            )}
        </AnimatePresence>
    );
}

export default PlaylistPlayer;

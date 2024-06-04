import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

import { playlistRemainingSelector } from '../../redux/selector';
import MusicPlayer from '../DefaultComponents/MusicPlayer';
import AudioApp from '../DefaultComponents/AudioApp';
import Sidebar from '../DefaultComponents/Sidebar';
import Header from '../DefaultComponents/Header';

function DefaultLayout({ children }) {
    const wrapperRef = useRef();
    const mainContainerRef = useRef();

    const [sticky, setSticky] = useState(false);
    const [fullScreen, setFullScreen] = useState(false);

    const playlistMusic = useSelector(playlistRemainingSelector);

    const { isHasPlaylist } = playlistMusic;

    const wrapperStyles = classNames('relative ml-[240px] flex-auto LM:ml-[70px] XXL:mr-[330px]', {
        'min-h-height-layout': isHasPlaylist,
        'min-h-[100dvh]': !isHasPlaylist,
    });

    const mainStyles = classNames(
        'absolute top-0 w-full h-full XM:px-[29px] px-[59px] overflow-x-hidden overflow-y-auto',
        {
            'w-full': !fullScreen,
        },
    );

    useEffect(() => {
        if (wrapperRef.current) {
            if (wrapperRef.current.clientWidth > 1590) {
                setFullScreen(true);

                return;
            }

            setFullScreen(false);
        }
    }, []);

    useEffect(() => {
        const handleScroll = (e) => {
            if (e.target.scrollTop <= 20) {
                setSticky(false);

                return;
            }

            setSticky(true);
        };

        const handleResize = () => {
            if (wrapperRef.current.clientWidth > 1590) {
                setFullScreen(true);

                return;
            }

            setFullScreen(false);
        };

        window.addEventListener('resize', handleResize);
        if (mainContainerRef.current) {
            mainContainerRef.current.addEventListener('scroll', handleScroll);
        }

        return () => {
            window.removeEventListener('resize', handleResize);
            if (mainContainerRef.current) {
                mainContainerRef.current.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    return (
        <div ref={wrapperRef} className="flex bg-purple-bg-layout">
            <Sidebar />
            <Header isSticky={sticky} />
            <div className={wrapperStyles}>
                <main ref={mainContainerRef} className={mainStyles}>
                    <div className="mb-[30px]">{children}</div>
                </main>
            </div>
            {(fullScreen || isHasPlaylist) && <MusicPlayer showDefault={fullScreen} />}
            <AudioApp data={playlistMusic} />
        </div>
    );
}

export default DefaultLayout;

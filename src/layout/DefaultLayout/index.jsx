import { useState, useEffect, useRef } from 'react';

import MusicPlayer from '../DefaultComponents/MusicPlayer';
import Sidebar from '../DefaultComponents/Sidebar';
import Header from '../DefaultComponents/Header';

function DefaultLayout({ children }) {
    const mainRef = useRef();

    const [position, setPosition] = useState(0);

    useEffect(() => {
        const handleScroll = (e) => {
            setPosition(e.target.scrollTop);
        };

        if (mainRef.current) {
            mainRef.current.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (mainRef.current) {
                mainRef.current.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    return (
        <div className="flex bg-purple-bg-layout">
            <Sidebar />
            <Header isSticky={position >= 25 ? true : false} />
            <div className="relative ml-[240px] flex-auto LM:ml-[70px] min-h-height-layout">
                <main
                    ref={mainRef}
                    className="absolute top-0 left-0 h-full w-full XM:px-[29px] px-[59px] overflow-x-hidden overflow-y-auto"
                >
                    <div className="mb-[30px]">{children}</div>
                </main>
            </div>
            <MusicPlayer />
        </div>
    );
}

export default DefaultLayout;

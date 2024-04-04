import { useState, useEffect, useRef } from 'react';

import Header from '../DefaultComponents/Header';
import MusicPlayer from '../DefaultComponents/PlayerVideo';
import Sidebar from '../DefaultComponents/Sidebar';

function DefaultLayout({ children }) {
    const mainRef = useRef();

    const [position, setPosition] = useState(0);

    useEffect(() => {
        const handleScroll = (e) => {
            setPosition(e.target.scrollTop);
        };

        mainRef.current.addEventListener('scroll', handleScroll);

        return () => {
            mainRef.current.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="flex bg-purple-bg-layout">
            <Sidebar />
            <Header isSticky={position >= 50 ? true : false} />
            <div className="relative ml-[240px] flex-auto LM:ml-[70px] min-h-height-layout">
                <main ref={mainRef} className="absolute top-0 left-0 h-full w-full XM:px-[29px] px-[59px] overflow-y-auto">
                    <div className="mb-[30px]">{children}</div>
                </main>
            </div>
            <MusicPlayer />
        </div>
    );
}

export default DefaultLayout;

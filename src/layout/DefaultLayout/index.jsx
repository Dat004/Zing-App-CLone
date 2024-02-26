import Header from '../DefaultComponents/Header';
import MusicPlayer from '../DefaultComponents/PlayerVideo';
import Sidebar from '../DefaultComponents/Sidebar';

function DefaultLayout({ children }) {
    return (
        <div className="flex bg-purple-bg-layout">
            <Sidebar />
            <Header />
            <div className="relative flex-auto min-h-height-content">
                <main className="absolute inset-0 w-full h-full XM:px-[29px] px-[59px]">{children}</main>
            </div>
            <MusicPlayer />
        </div>
    );
}

export default DefaultLayout;

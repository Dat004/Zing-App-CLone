import Header from '../DefaultComponents/Header';
import MusicPlayer from '../DefaultComponents/PlayerVideo';
import Sidebar from '../DefaultComponents/Sidebar';

function DefaultLayout({ children }) {
    return (
        <div className="flex bg-purple-bg-layout">
            <Sidebar />
            <Header />
            <div className="relative ml-[240px] flex-auto LM:ml-[70px] min-h-height-content">
                <main className="absolute top-0 left-0 h-full w-full XM:px-[29px] px-[59px] overflow-y-auto">
                    <div className='mb-[30px]'>{children}</div>
                </main>
            </div>
            <MusicPlayer />
        </div>
    );
}

export default DefaultLayout;

import Header from '../DefaultComponents/Header';
import Sidebar from '../DefaultComponents/Sidebar';

function DefaultLayout({ children }) {
    return (
        <div className="flex bg-purple-bg-layout">
            <Sidebar />
            <Header />
            <div className="min-h-height-content pt-[70px]">{children}</div>
        </div>
    );
}

export default DefaultLayout;

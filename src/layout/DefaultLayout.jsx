import { Link } from 'react-router-dom';

import Sidebar from './DefaultComponents/Sidebar';

function DefaultLayout({ children }) {
    return (
        <div className="flex bg-purple-bg-layout">
            <Sidebar />
            <div className="min-h-height-content">{children}</div>
        </div>
    );
}

export default DefaultLayout;

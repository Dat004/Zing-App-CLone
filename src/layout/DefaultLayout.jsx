import { Link } from 'react-router-dom';

import { LogoDarkIcon, LogoPrimaryIcon } from '../components/CustomIcon';
import Sidebar from './DefaultComponents/Sidebar';
import Menu from './DefaultComponents/Sidebar/Menu';
import FooterSide from './DefaultComponents/Sidebar/FooterSide';

function DefaultLayout({ children }) {
    return (
        <div className="flex bg-purple-bg-layout">
            <Sidebar className="min-h-height-content max-h-full w-[240px] LM:w-[70px] LM:bg-purple-bg-sidebar-res bg-purple-bg-side-bar transition-all">
                <div className="fixed top-0 flex justify-start items-center w-[240px] LM:justify-center LM:w-[70px] LM:p-0 h-[70px] pl-[28px] pr-[25px]">
                    <Link to='/' className="flex justify-start LM:justify-center items-center w-full h-full">
                        <div className='block LM:hidden'>
                            <LogoDarkIcon />
                        </div>
                        <div className='hidden LM:block'>
                            <LogoPrimaryIcon />
                        </div>
                    </Link>
                </div>
                <Menu />
                <FooterSide />
            </Sidebar>
            <div className="min-h-height-content">{children}</div>
        </div>
    );
}

export default DefaultLayout;

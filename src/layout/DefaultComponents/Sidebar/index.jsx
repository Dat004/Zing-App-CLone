import { useState } from 'react';
import { Link } from 'react-router-dom';
import { GrNext, GrPrevious } from 'react-icons/gr';

import { LogoDarkIcon, LogoPrimaryIcon, PlusIcon } from '../../../components/CustomIcon';
import Menu from './Menu';

function Sidebar() {
    const [isExtend, setIsExtend] = useState(false);

    const handleResizeSidebar = () => {
        setIsExtend((state) => !state);
    };

    return (
        <aside
            className={`fixed top-0 left-0 min-h-height-content max-h-full w-[240px] bg-purple-bg-side-bar transition-all ${
                isExtend ? 'LM:bg-purple-bg-sidebar-res' : 'LM:w-[70px] LM:bg-purple-bg-sidebar-res'
            } z-[99]`}
        >
            <div className={`fixed top-0 flex justify-start items-center w-[240px] h-[70px] pl-[28px] pr-[25px] ${isExtend ? '' : 'LM:w-[70px] LM:p-0 LM:justify-center'}`}>
                <Link to="/" className={`flex justify-start ${isExtend ? '' : 'LM:justify-center'} items-center w-full h-full`}>
                    <div className={`block ${isExtend ? '' : 'LM:hidden'}`}>
                        <LogoDarkIcon />    
                    </div>
                    <div className={`hidden ${isExtend ? '' : 'LM:block'}`}>
                        <LogoPrimaryIcon />
                    </div>
                </Link>
            </div>
            <Menu isExtend={isExtend} />
            <footer
                className={`fixed bottom-[90px] left-0 w-[240px] px-[24px] ${
                    isExtend ? 'px-0' : 'LM:w-[70px] LM:p-0 LM:border-0'
                } h-[54px] border-t-[1px] border-purple-bd-primary-color`}
            >
                <div
                    className={`flex LM:justify-center items-center h-full text-purple-text-navigation font-medium text-[14px]`}
                >
                    <div
                        className={`flex flex-1 items-center gap-[12px] ${isExtend ? '' : 'LM:hidden'} cursor-pointer`}
                        role="button"
                    >
                        <PlusIcon />
                        <span>Tạo playlist mới</span>
                    </div>
                    <div className="LM:block hidden">
                        <button
                            onClick={handleResizeSidebar}
                            className="flex justify-center items-center w-[40px] h-[40px] rounded-[50%] bg-purple-bg-active-items"
                        >
                            {isExtend ? <GrPrevious /> : <GrNext />}
                        </button>
                    </div>
                </div>
            </footer>
        </aside>
    );
}

export default Sidebar;

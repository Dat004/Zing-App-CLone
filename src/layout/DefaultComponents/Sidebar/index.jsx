import { useState } from 'react';
import { Link } from 'react-router-dom';
import { GrNext, GrPrevious } from 'react-icons/gr';
import classNames from 'classnames';

import { LogoDarkIcon, LogoPrimaryIcon, PlusIcon } from '../../../components/CustomIcon';
import Button from '../../../components/Button';
import Menu from './Menu';

function Sidebar({ isOverride = false }) {
    const [isExtend, setIsExtend] = useState(false);

    const wrapperStyles = classNames(
        'fixed top-0 left-0 max-h-full w-[240px] bg-purple-bg-side-bar transition-all z-999',
        {
            'LM:bg-purple-bg-sidebar-mini': isExtend,
            'LM:w-[70px] LM:bg-purple-bg-sidebar-mini': !isExtend,
            'min-h-height-layout': isOverride,
            'min-h-[100dvh]': !isOverride,
        },
    );

    const wrapperLogo = classNames(
        'fixed top-0 flex justify-start items-center w-[240px] h-[70px] pl-[28px] pr-[25px]',
        {
            'LM:w-[70px] LM:p-0 LM:justify-center': !isExtend,
        },
    );

    const containerLogo = classNames('flex justify-start items-center w-full h-full', {
        'LM:justify-center': !isExtend,
    });

    const footerStyles = classNames(
        'fixed left-0 w-[240px] px-[24px] h-[54px] border-t-[1px] border-purple-bd-primary-color',
        {
            'px-0': isExtend,
            'LM:w-[70px] LM:p-0 LM:border-0': !isExtend,
            'bottom-[90px]': isOverride,
            'bottom-0': !isOverride,
        },
    );

    const createBtnStyles = classNames('gap-[6px]', {
        'LM:hidden': !isExtend,
    });

    const handleResizeSidebar = () => {
        setIsExtend((state) => !state);
    };

    return (
        <aside className={wrapperStyles}>
            <div className={wrapperLogo}>
                <Link to="/" className={containerLogo}>
                    <div className={`block ${isExtend ? '' : 'LM:hidden'}`}>
                        <LogoDarkIcon />
                    </div>
                    <div className={`hidden ${isExtend ? '' : 'LM:block'}`}>
                        <LogoPrimaryIcon />
                    </div>
                </Link>
            </div>
            <Menu isExtend={isExtend} />
            <footer className={footerStyles}>
                <div className="flex LM:justify-center items-center h-full gap-[20px] text-purple-text-secondary font-medium text-[14px]">
                    <Button
                        leftIcon={<PlusIcon />}
                        className={createBtnStyles}
                    >
                        <span>Tạo playlist mới</span>
                    </Button>
                    <div className="LM:block hidden">
                        <button
                            onClick={handleResizeSidebar}
                            className="flex justify-center items-center w-[40px] h-[40px] rounded-[50%] bg-purple-bg-btn-alpha"
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

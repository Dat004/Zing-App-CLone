import PropTypes from 'prop-types';
import { useState } from 'react';
import { PiHeartBold } from 'react-icons/pi';
import { TfiMoreAlt } from 'react-icons/tfi';
import { FiDownload } from 'react-icons/fi';
import { MdBlockFlipped } from 'react-icons/md';
import { LuListMusic } from 'react-icons/lu';
import classNames from 'classnames';

import TippyBox from '../Tippy/TippyBox';
import Tippy from '../Tippy';
import PopperWrapper from '../Popper';
import DATAS from '../../tempData';
import CardMusic from '../CardImage';
import Button from '../Button';

function ActionsMusic({
    dataMenu,
    className,
    widthBtn = '26px',
    heightBtn = '26px',
    isAddLibrary = false,
    isAddPlaylist = false,
}) {
    const DATA_OPTIONS_CURRENT_MUSIC = DATAS.DATA_OPTIONS_CURRENT_MUSIC;

    const actionsMusicClasses = classNames('flex items-center', {
        [className]: className,
    });

    const [showMenu, setShowMenu] = useState(false);

    const MENU_OPTIONS_CURRENT_MUSIC = () => {
        return (
            <PopperWrapper className="w-[280px]">
                <div>
                    <div className="pt-[15px] px-[15px]">
                        <CardMusic widthImg="40px" heightImg="40px" isHoverArtist isHoverName />
                    </div>
                    <div className="flex justify-between mx-[15px] mt-[15px] mb-[10px] bg-purple-bg-active-items rounded-[8px]">
                        <Button className="flex-col items-center !justify-normal flex-1 max-w-[80px] py-[8px] text-purple-text-primary text-[10px] rounded-[8px]">
                            <span className="mb-[4px] text-[16px]">
                                <FiDownload />
                            </span>
                            <span className="leading-[14px]">Tải xuống</span>
                        </Button>
                        <Button className="flex-col items-center !justify-normal flex-1 max-w-[80px] py-[8px] text-purple-text-primary text-[10px] rounded-[8px]">
                            <span className="mb-[4px] text-[16px]">
                                <LuListMusic />
                            </span>
                            <span className="leading-[14px]">Lời bài hát</span>
                        </Button>
                        <Button className="flex-col items-center !justify-normal flex-1 max-w-[80px] py-[8px] text-purple-text-primary text-[10px] rounded-[8px]">
                            <span className="mb-[4px] text-[16px]">
                                <MdBlockFlipped />
                            </span>
                            <span className="leading-[14px]">Chặn</span>
                        </Button>
                    </div>
                    <ul>
                        {DATA_OPTIONS_CURRENT_MUSIC.map((items) => {
                            return (
                                <li key={items.id} className="hover:bg-purple-bg-active-items">
                                    <Button className="!justify-between w-full py-[10px] pr-[20px] pl-[14px] text-[14px] text-purple-text-secondary">
                                        <p className="flex items-center">
                                            {items.leftIcon && <span className="mr-[15px]">{items.leftIcon}</span>}
                                            <span className="leading-[17px]">{items.title}</span>
                                        </p>
                                        {items.rightIcon && <span>{items.rightIcon}</span>}
                                    </Button>
                                </li>
                            );
                        })}
                    </ul>
                    <p className="pt-[6px] pb-[12px] text-center text-purple-text-items text-[13px] font-medium leading-[18px]">
                        Cung cấp bởi ST.319
                    </p>
                </div>
            </PopperWrapper>
        );
    };

    return (
        <div className={actionsMusicClasses}>
            {isAddLibrary && (
                <TippyBox content="Thêm vào thư viện" placement="top" arrow offset={[0, 10]}>
                    <Button
                        rounded
                        style={{ width: widthBtn, height: heightBtn }}
                        className="mx-[3px] !text-purple-text-actions"
                    >
                        <span className='flex items-center justify-center w-full h-full'><PiHeartBold className="text-[16px]" /></span>
                    </Button>
                </TippyBox>
            )}
            {isAddPlaylist && <Button></Button>}
            <TippyBox content="Xem thêm" placement="top" arrow offset={[0, 10]}>
                <Tippy
                    visible={showMenu}
                    onClickOutside={() => setShowMenu(false)}
                    placement="top-start"
                    offset={[0, 22]}
                    interactive
                    renderComponent={<MENU_OPTIONS_CURRENT_MUSIC />}
                >
                    <Button
                        rounded
                        onClick={() => setShowMenu(true)}
                        style={{ width: widthBtn, height: heightBtn }}
                        className="mx-[3px] px-[4px] !text-purple-text-actions"
                    >
                        <span className='flex items-center justify-center w-full h-full'><TfiMoreAlt /></span>
                    </Button>
                </Tippy>
            </TippyBox>
        </div>
    );
}

ActionsMusic.propTypes = {
    isAddLibrary: PropTypes.bool,
    isAddPlaylist: PropTypes.bool,
};

export default ActionsMusic;

import { useState } from 'react';
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';
import { GoGear } from 'react-icons/go';

import { DownLoadToPCIcon } from '../../../components/CustomIcon';
import MenuWrapper from '../../../components/Popper/MenuWrapper';
import DATAS from '../../../tempData';
import Tippy from '../../../components/Tippy';
import TippyBox from '../../../components/Tippy/TippyBox';
import PopperWrapper from '../../../components/Popper';
import images from '../../../assets/images';
import Image from '../../../components/Image';
import Search from './Search';
import Button from '../../../components/Button';

function Header() {
    const DATA_SUB_PACKAGE = DATAS.DATA_SUB_PACKAGE;
    const DATA_MENU_SETTINGS = DATAS.DATA_MENU_SETTINGS;

    const [isShow, setIsShow] = useState({
        menuUser: false,
        menuSettings: false,
    });

    const MENU_USER = () => {
        return (
            <PopperWrapper className="w-[300px] p-[6px] max-h-[calc(100vh-250px)]">
                <div className="flex items-center justify-center">
                    <Button
                        className="h-[44px] w-[calc(100%-20px)] py-[10px] px-[12px] mt-[10px] mb-[20px] mx-[10px] text-[14px] font-bold leading-[20px]"
                        large
                        primary
                    >
                        Đăng nhập
                    </Button>
                </div>
                <div className="px-[10px]">
                    <h3 className="mb-[8px] text-[16px] font-bold leading-[19px] text-purple-text-primary">
                        Đăng ký gói
                    </h3>
                    {DATA_SUB_PACKAGE.map((items) => (
                        <div
                            style={{ backgroundImage: `url('${items.bgUrl}')` }}
                            key={items.id}
                            className={`mb-[12px] py-[16px] px-[20px] rounded-[12px] bg-no-repeat bg-cover bg-center`}
                        >
                            <div className="flex items-center mb-[4px]">
                                <h2
                                    className={`mr-[4px] text-[24px] font-bold leading-[29px] ${
                                        (items.isPlus && 'text-plus-color') || (items.isPremium && 'text-premium-color')
                                    }`}
                                >
                                    {items.title}
                                </h2>
                                {items.label}
                            </div>
                            <p className="mb-[4px] text-[14px] font-bold leading-[20px] text-title-package-color">
                                {items.price}
                            </p>
                            <p className="mb-[16px] text-[14px] font-normal leading-[20px] text-title-package-color/80 whitespace-normal">
                                {items.description}
                            </p>
                            <Button
                                className={`py-[6px] px-[24px] text-[13px] font-bold leading-[20px] ${
                                    (items.isPlus && '!bg-plus-bg') || (items.isPremium && '!bg-premium-bg')
                                }`}
                                medium
                                primary
                            >
                                <a className="leading-[20px]" href="">
                                    Tìm hiểu thêm
                                </a>
                            </Button>
                        </div>
                    ))}
                </div>
            </PopperWrapper>
        );
    };

    const MENU_SETTINGS = () => {
        return (
            <PopperWrapper className="w-[300px] p-[6px]">
                <ul>
                    {DATA_MENU_SETTINGS.map((items) => {
                        let COMP;

                        const props = {
                            onClick: () => {},
                        };

                        if (items.path) {
                            COMP = 'a';
                            props.href = items.path;
                        } else {
                            COMP = Button;
                        }

                        return (
                            <li
                                key={items.id}
                                className={`relative flex items-center h-[44px] hover:bg-purple-bg-active-items rounded-[4px] ${
                                    items.separate
                                        ? 'after:content-[""] after:absolute after:top-[-10px] after:left-[12px] after:h-px after:w-[calc(100%-24px)] after:mx-auto after:bg-purple-bg-separate-items mt-[21px]'
                                        : ''
                                }`}
                            >
                                <COMP
                                    {...props}
                                    className={`flex items-center justify-between w-full py-[12px] px-[10px] text-[14px] font-normal ${
                                        items.isChildMenu ? 'text-purple-text-secondary' : '!text-purple-text-items'
                                    } hover:!text-purple-text-primary`}
                                >
                                    <p className="flex items-center">
                                        {items.leftIcon && <span className="mr-[12px]">{items.leftIcon}</span>}
                                        <span>{items.title}</span>
                                    </p>
                                    {items.rightIcon && <span>{items.rightIcon}</span>}
                                </COMP>
                            </li>
                        );
                    })}
                </ul>
            </PopperWrapper>
        );
    };

    return (
        <header className="fixed left-[240px] LM:left-[70px] right-0 top-0 h-[70px] min-w-[660px] backdrop-blur-[50px] bg-purple-bg-header z-50">
            <section className="flex items-center justify-between gap-[10px] h-full px-[59px] XM:px-[29px]">
                {/* <div className='flex items-center justify-between w-full'> */}
                <div className="flex items-center flex-auto">
                    <div className="flex items-center">
                        <Button className="!justify-start w-[44px] h-[24px]">
                            <GoArrowLeft className="text-[24px] text-purple-text-primary" />
                        </Button>
                        <Button disabled className="!justify-start w-[44px] h-[24px]">
                            <GoArrowRight className="text-[24px] text-purple-text-primary" />
                        </Button>
                    </div>
                    <Search />
                </div>
                <div className="flex items-center">
                    <Button
                        large
                        primary
                        className="flex items-center py-[10px] px-[24px] mr-[12px] gap-[4px] !text-purple-text-btn-download bg-purple-bg-active-items"
                    >
                        <DownLoadToPCIcon className="text-[14px]" />
                        <span className="flex items-center font-bold text-[14px] leading-[17px]">Tải bản Windows</span>
                    </Button>
                    <TippyBox content="Cài đặt" placement="bottom" arrow offset={[0, 10]}>
                        <Tippy
                            visible={isShow.menuSettings}
                            interactive
                            onClickOutside={() => setIsShow((state) => ({ ...state, menuSettings: false }))}
                            offset={[2, 10]}
                            placement="bottom-end"
                            renderComponent={<MENU_SETTINGS />}
                        >
                            <Button
                                rounded
                                onClick={() => setIsShow((state) => ({ ...state, menuSettings: !state.menuSettings }))}
                                className="flex p-[10px] mr-[10px] rounded-full !bg-purple-bg-active-items"
                            >
                                <span className="flex items-center text-[14px] text-purple-text-btn-setting leading-[20px]">
                                    <GoGear className="text-[20px]" />
                                </span>
                            </Button>
                        </Tippy>
                    </TippyBox>
                    <Tippy
                        visible={isShow.menuUser}
                        interactive
                        onClickOutside={() => setIsShow((state) => ({ ...state, menuUser: false }))}
                        offset={[2, 12]}
                        placement="bottom-end"
                        renderComponent={<MENU_USER />}
                    >
                        <Button rounded onClick={() => setIsShow((state) => ({ ...state, menuUser: !state.menuUser }))}>
                            <span className='w-[38px] h-[38px]'>
                                <Image rounded src={images.userClient} />
                            </span>
                        </Button>
                    </Tippy>
                    {/* <MenuWrapper menuItems={<MENU_USER />}>
                        <Button rounded onClick={handleShowMenu}>
                            <Image widthImg="38px" heightImg="38px" bdRadius="50%" src={images.userClient} />
                        </Button>
                    </MenuWrapper> */}
                </div>
                {/* </div> */}
            </section>
        </header>
    );
}

export default Header;

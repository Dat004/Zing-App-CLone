import { useState } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { GoGear } from 'react-icons/go';

import { DownLoadToPCIcon } from '../../../components/CustomIcon';
import DATAS from '../../../tempData';
import Tippy from '../../../components/Tippy';
import TippyBox from '../../../components/Tippy/TippyBox';
import PopperWrapper from '../../../components/Popper';
import images from '../../../assets/images';
import Search from './Search';

function Header() {
    const DATA_SUB_PACKAGE = DATAS.DATA_SUB_PACKAGE;

    const [isShow, setIsShow] = useState(false);

    const handleShowMenu = () => {
        setIsShow(true);
    };

    return (
        <header className="fixed left-[240px] LM:left-[70px] right-0 top-0 h-[70px] min-w-[660px]">
            <section className="flex items-center justify-between gap-[10px] h-full px-[59px] XM:px-[29px]">
                {/* <div className='flex items-center justify-between w-full'> */}
                <div className="flex items-center flex-auto">
                    <div className="flex items-center">
                        <button className="flex justify-start items-center w-[44px] h-[24px]">
                            <BsArrowLeft className="text-[24px] text-purple-text-primary" />
                        </button>
                        <button className="flex justify-start items-center w-[44px] h-[24px]">
                            <BsArrowRight className="text-[24px] text-purple-text-primary" />
                        </button>
                    </div>
                    <Search />
                </div>
                <div className="flex items-center gap-[12px]">
                    <button className="flex items-center py-[10px] px-[24px] gap-[4px] text-purple-text-btn-download  rounded-full bg-purple-bg-active-items">
                        <DownLoadToPCIcon className="text-[14px]" />
                        <span className="flex items-center font-semibold text-[14px] leading-[17px]">
                            Tải bản Windows
                        </span>
                    </button>
                    <TippyBox content="Cài đặt" placement="bottom" arrow offset={[0, 10]}>
                        <button className="flex p-[10px] rounded-full bg-purple-bg-active-items">
                            <span className="flex items-center text-[14px] text-purple-text-btn-setting leading-[20px]">
                                <GoGear className="text-[20px]" />
                            </span>
                        </button>
                    </TippyBox>
                    <Tippy
                        visible={isShow}
                        interactive
                        onClickOutside={() => setIsShow(false)}
                        offset={[2, 12]}
                        placement="bottom-end"
                        renderComponent={
                            <>
                                <PopperWrapper className="w-[300px] p-[6px] max-h-[calc(100vh-250px)] rounded-[8px]">
                                    <button className="w-[calc(100%-20px)] h-[44px] py-[10px] px-[12px] mt-[10px] mb-[20px] mx-[10px] bg-purple-color font-semibold text-[14px] text-white-color rounded-[20px]">
                                        Đăng nhập
                                    </button>
                                    <div className="px-[10px]">
                                        <h3 className="mb-[8px] text-[16px] font-semibold leading-[19px] text-purple-text-primary">
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
                                                            (items.isPlus && 'text-plus-color') ||
                                                            (items.isPremium && 'text-premium-color')
                                                        }`}
                                                    >
                                                        {items.title}
                                                    </h2>
                                                    {items.label}
                                                </div>
                                                <p className="mb-[4px] text-[14px] font-semibold leading-[20px] text-title-package-color">
                                                    {items.price}
                                                </p>
                                                <p className="mb-[16px] text-[14px] font-normal leading-[20px] text-title-package-color/80 whitespace-normal">
                                                    {items.description}
                                                </p>
                                                <button
                                                    className={`flex items-center justify-center py-[6px] px-[24px] text-[13px] font-semibold leading-[20px] ${
                                                        (items.isPlus && 'bg-plus-bg') ||
                                                        (items.isPremium && 'bg-premium-bg')
                                                    } text-white-color rounded-[100px]`}
                                                >
                                                    <a className="leading-[20px]" href="">
                                                        Tìm hiểu thêm
                                                    </a>
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </PopperWrapper>
                            </>
                        }
                    >
                        <button onClick={handleShowMenu} className="rounded-full">
                            <span className="flex w-[38px] h-[38px] object-contain">
                                <img
                                    className="w-full h-full rounded-[50%] object-cover"
                                    src={images.userClient}
                                    alt=""
                                />
                            </span>
                        </button>
                    </Tippy>
                </div>
                {/* </div> */}
            </section>
        </header>
    );
}

export default Header;

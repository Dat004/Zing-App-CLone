import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { GoGear } from 'react-icons/go';

import { DownLoadToPCIcon } from '../../../components/CustomIcon';
import images from '../../../assets/images';
import Search from './Search';

function Header() {
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
                    <button className="flex py-[10px] px-[24px] rounded-full bg-purple-bg-active-items">
                        <span className="flex items-center gap-[4px] font-semibold text-[14px] text-purple-text-btn-download leading-[20px]">
                            <DownLoadToPCIcon /> Tải bản Windows
                        </span>
                    </button>
                    <button className="flex p-[10px] rounded-full bg-purple-bg-active-items">
                        <span className="flex items-center text-[14px] text-purple-text-btn-setting leading-[20px]">
                            <GoGear className="text-[20px]" />
                        </span>
                    </button>
                    <button className="rounded-full">
                        <span className="flex w-[40px] h-[40px] object-contain">
                            <img className="w-full h-full rounded-[50%] object-cover" src={images.userClient} alt="" />
                        </span>
                    </button>
                </div>
                {/* </div> */}
            </section>
        </header>
    );
}

export default Header;

import { BsSkipStartFill, BsSkipEndFill, BsPlayCircle } from 'react-icons/bs';
import { IoRepeat, IoShuffle } from 'react-icons/io5';

import InputSlider from '../../../components/InputSlider';

function BarController() {
    return (
        <div>
            <div className="flex items-center justify-center">
                <div className="flex items-center">
                    <button className="flex mx-[7px] items-center justify-center w-[32px] h-[32px] text-purple-text-actions bg-transparent hover:bg-purple-bg-active-items rounded-[50%]">
                        <IoShuffle className="text-[26px]" />
                    </button>
                    <button className="flex mx-[7px] items-center justify-center w-[32px] h-[32px] text-purple-text-actions bg-transparent hover:bg-purple-bg-active-items rounded-[50%]">
                        <BsSkipStartFill className="text-[26px]" />
                    </button>
                    <button className="flex mx-[7px] items-center justify-center w-[50px] h-[50px] text-purple-text-actions hover:text-link-text-hover rounded-[50%]">
                        <BsPlayCircle className="text-[38px]" />
                    </button>
                    <button className="flex mx-[7px] items-center justify-center w-[32px] h-[32px] text-purple-text-actions bg-transparent hover:bg-purple-bg-active-items rounded-[50%]">
                        <BsSkipEndFill className="text-[26px]" />
                    </button>
                    <button className="flex mx-[7px] items-center justify-center w-[32px] h-[32px] text-purple-text-actions bg-transparent hover:bg-purple-bg-active-items rounded-[50%]">
                        <IoRepeat className="text-[26px]" />
                    </button>
                </div>
            </div>
            <div className="flex items-center mb-[5px]">
                <p className="flex items-center justify-end mr-[10px] min-w-[45px] text-[12px] font-medium text-purple-text-primary opacity-[0.5]">
                    00:00
                </p>
                <InputSlider className="flex items-center flex-grow h-[15px]" heigthSlider="4px" widthThumb='12px' heightThumb='12px' />
                <p className="flex items-center justify-start ml-[10px] min-w-[45px] text-[12px] font-medium text-purple-text-primary">
                    03:44
                </p>
            </div>
        </div>
    );
}

export default BarController;

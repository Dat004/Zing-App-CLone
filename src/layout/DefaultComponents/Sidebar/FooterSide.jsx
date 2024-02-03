import { GrNext } from "react-icons/gr";

import { PlusIcon } from '../../../components/CustomIcon';

function FooterSide() {
    return (
        <footer className='fixed bottom-[90px] left-0 w-[240px] LM:w-[70px] h-[54px] border-t-[1px] border-purple-bd-separator-color'>
            <div className='flex LM:justify-center items-center h-full px-[28px] LM:p-0 text-purple-text-navigation font-medium text-[14px]'>
                <div className='flex items-center gap-[12px] LM:hidden  cursor-pointer' role='button'>
                    <PlusIcon />
                    <span>Tạo playlist mới</span>
                </div>
                <div className="LM:block hidden">
                    <button className="flex justify-center items-center w-[40px] h-[40px] rounded-[50%] bg-purple-bg-active-items">
                        <GrNext />
                    </button>
                </div>
            </div>
        </footer>
    );
}

export default FooterSide;

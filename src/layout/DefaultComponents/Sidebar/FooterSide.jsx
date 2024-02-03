import { PlusIcon } from '../../../components/CustomIcon';

function FooterSide() {
    return (
        <footer className='fixed bottom-[90px] left-0 w-[240px] h-[54px] border-t-[1px] border-purple-bd-separator-color'>
            <div className='flex items-center gap-[12px] h-full px-[28px] text-purple-text-navigation font-medium text-[14px] cursor-pointer' role='button'>
                <PlusIcon />
                <span>Tạo playlist mới</span>
            </div>
        </footer>
    );
}

export default FooterSide;

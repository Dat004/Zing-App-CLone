import { FiFilter } from 'react-icons/fi';

function HeaderCart() {
    return (
        <div className="w-full">
            <div className="flex items-center justify-between px-[10px]">
                <div className="flex items-center w-1/2 mr-[10px] flex-shrink-0 flex-grow-0">
                    <i className="min-w-[14px] mr-[10px] text-[16px] text-purple-text-items">
                        <FiFilter />
                    </i>
                    <span className="uppercase text-[12px] font-medium">Bài hát</span>
                </div>
                <div className="flex-grow flex-shrink w-0">
                    <span className="uppercase text-[12px] font-medium">Album</span>
                </div>
                <div className="ml-[10px] flex-shrink-0 flex-grow-0">
                    <span className="uppercase text-[12px] font-medium">Thời gian</span>
                </div>
            </div>
        </div>
    );
}

export default HeaderCart;

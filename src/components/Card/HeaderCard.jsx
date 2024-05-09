import PropTypes from 'prop-types';
import { FiFilter } from 'react-icons/fi';

function HeaderCart({ data = [], isAllowSort = false, iShowTitleAlbum = false }) {
    return (
        <div className="w-full border-b-[1px] border-b-purple-bd-secondary-color">
            <div className="flex items-center justify-between p-[10px]">
                <div className="flex items-center w-1/2 mr-[10px] flex-shrink-0 flex-grow-0">
                    <div className="min-w-[14px] mr-[10px]">
                        {isAllowSort && (
                            <>
                                <i className="text-[16px] text-purple-text-items">
                                    <FiFilter />
                                </i>
                            </>
                        )}
                    </div>
                    <span className="uppercase text-[12px] text-purple-text-items font-medium">Bài hát</span>
                </div>
                {iShowTitleAlbum && (
                    <div className="flex-grow flex-shrink w-0 MS:hidden">
                        <span className="uppercase text-[12px] text-purple-text-items font-medium">Album</span>
                    </div>
                )}
                <div className="ml-[10px] flex-shrink-0 flex-grow-0">
                    <span className="uppercase text-[12px] text-purple-text-items font-medium">Thời gian</span>
                </div>
            </div>
        </div>
    );
};

HeaderCart.propTypes = {
    data: PropTypes.array,
    isAllowSort: PropTypes.bool,
    iShowTitleAlbum: PropTypes.bool,
};

export default HeaderCart;

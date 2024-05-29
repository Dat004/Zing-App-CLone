import PropTypes from 'prop-types';
import { FiFilter } from 'react-icons/fi';
import { SiGradleplaypublisher } from 'react-icons/si';

import InputCheckbox from '../InputSlider/InputCheckbox';
import Button from '../Button';

function HeaderCart({
    data = [],
    dataSelect = [],
    onSelect = () => {},
    onAdd = () => {},
    isAllowSort = false,
    iShowTitleAlbum = false,
}) {
    const isSelectedAll = data.every((_, index) => dataSelect.includes(index));

    return (
        <div className="w-full border-b-[1px] border-b-purple-bd-secondary-color">
            <div className="flex items-center justify-between p-[10px]">
                <div className="flex items-center w-1/2 mr-[10px] flex-shrink-0 flex-grow-0">
                    {!!dataSelect.length ? (
                        <>
                            <div className="min-w-[14px] items-center mr-[10px]">
                                <InputCheckbox checked={isSelectedAll} handleChange={(e) => onSelect(e, data)} />
                            </div>
                            <Button
                                outline
                                onClick={() => onAdd(data, dataSelect)}
                                className="py-[2px] px-[10px] uppercase text-[10px] font-semibold !bg-purple-bg-side-bar !text-purple-text-items"
                                leftIcon={<SiGradleplaypublisher className="text-[12px]" />}
                            >
                                Thêm vào danh sách phát
                            </Button>
                        </>
                    ) : (
                        <>
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
                        </>
                    )}
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
}

HeaderCart.propTypes = {
    data: PropTypes.array,
    isAllowSort: PropTypes.bool,
    iShowTitleAlbum: PropTypes.bool,
};

export default HeaderCart;

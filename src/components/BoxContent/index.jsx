import PropTypes from 'prop-types';
import { SlArrowRight } from 'react-icons/sl';

import CustomLink from '../CustomLink';

function BoxContent({ children, title = '', isHeader = false, isSeeAll = false }) {
    return (
        <div className="mt-[48px]">
            {isHeader && (
                <div className="flex items-center justify-between mb-[20px]">
                    <h3 className="font-bold text-[20px] text-purple-text-primary">{title}</h3>
                    {isSeeAll && (
                        <CustomLink
                            className="flex items-center text-purple-text-items text-[12px] font-medium"
                            isHover
                        >
                            TẤT CẢ
                            <i className="ml-[6px] text-[16px]">
                                <SlArrowRight />
                            </i>
                        </CustomLink>
                    )}
                </div>
            )}
            {children}
        </div>
    );
};

BoxContent.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string,
    isHeader: PropTypes.bool,
    isSeeAll: PropTypes.bool,
};

export default BoxContent;

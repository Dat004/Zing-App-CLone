import PropTypes from 'prop-types';
import { SlArrowRight } from 'react-icons/sl';
import classNames from 'classnames';

import CustomLink from '../CustomLink';

function BoxContent({ children, className, title = '', to = '', isHeader = false, isSeeAll = false, ...passProps }) {
    const boxClasses = classNames('mt-[48px]', {
        [className]: className,
    });

    return (
        <div className={boxClasses} {...passProps}>
            {isHeader && (
                <div className="flex items-center justify-between mb-[20px]">
                    <h3 className="font-bold text-[20px] text-purple-text-primary">{title}</h3>
                    {isSeeAll && (
                        <CustomLink
                            to={to}
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
}

BoxContent.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    title: PropTypes.string,
    to: PropTypes.string,
    isHeader: PropTypes.bool,
    isSeeAll: PropTypes.bool,
};

export default BoxContent;

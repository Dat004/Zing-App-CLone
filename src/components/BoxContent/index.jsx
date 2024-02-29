import { Link } from 'react-router-dom';
import { SlArrowRight } from 'react-icons/sl';

function BoxContent({ children, title, isHeader = false, isSeeAll = false }) {
    return (
        <div className="mt-[48px]">
            {isHeader && (
                <div className="flex items-center justify-between mb-[20px]">
                    <h3 className="font-bold text-[20px] text-purple-text-primary">{title}</h3>
                    {isSeeAll && (
                        <Link className="flex items-center font-medium text-[12px] text-purple-text-items hover:text-link-text-hover">
                            TẤT CẢ
                            <i className="ml-[6px] text-[16px]">
                                <SlArrowRight />
                            </i>
                        </Link>
                    )}
                </div>
            )}
            {children}
        </div>
    );
}

export default BoxContent;

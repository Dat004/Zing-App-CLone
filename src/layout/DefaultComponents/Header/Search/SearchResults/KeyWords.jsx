import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { LuTrendingUp } from 'react-icons/lu';
import { FiSearch } from 'react-icons/fi';

function KeyWords({ data, keyWords, isRelate = false }) {
    let IconContent = isRelate ? FiSearch : LuTrendingUp;

    return (
        <>
            <ul>
                <li className="list-none py-[8px] px-[10px] rounded-[4px] overflow-hidden hover:bg-purple-bg-active-items">
                    <Link className="flex items-center gap-[10px] text-purple-text-primary">
                        <IconContent className="text-[16px] text-purple-text-items" />
                        <span className="text-[14px] font-normal">nhạc tết</span>
                    </Link>
                </li>
                <li className="list-none py-[8px] px-[10px] rounded-[4px] overflow-hidden hover:bg-purple-bg-active-items">
                    <Link className="flex items-center gap-[10px] text-purple-text-primary">
                        <IconContent className="text-[16px] text-purple-text-items" />
                        <span className="text-[14px] font-normal">si mê</span>
                    </Link>
                </li>
                <li className="list-none py-[8px] px-[10px] rounded-[4px] overflow-hidden hover:bg-purple-bg-active-items">
                    <Link className="flex items-center gap-[10px] text-purple-text-primary">
                        <IconContent className="text-[16px] text-purple-text-items" />
                        <span className="text-[14px] font-normal">trái đất ôm mặt trời</span>
                    </Link>
                </li>
                <li className="list-none py-[8px] px-[10px] rounded-[4px] overflow-hidden hover:bg-purple-bg-active-items">
                    <Link className="flex items-center gap-[10px] text-purple-text-primary">
                        <IconContent className="text-[16px] text-purple-text-items" />
                        <span className="text-[14px] font-normal">chị đẹp đạp gió rẽ sóng</span>
                    </Link>
                </li>
                <li className="list-none py-[8px] px-[10px] rounded-[4px] overflow-hidden hover:bg-purple-bg-active-items">
                    <Link className="flex items-center gap-[10px] text-purple-text-primary">
                        <IconContent className="text-[16px] text-purple-text-items" />
                        <span className="text-[14px] font-normal">tò tí te</span>
                    </Link>
                </li>
                <li className="list-none py-[8px] px-[10px] rounded-[4px] overflow-hidden hover:bg-purple-bg-active-items">
                    <Link className="flex items-center gap-[10px] text-purple-text-primary">
                        <IconContent className="text-[16px] text-purple-text-items" />
                        <span className="text-[14px] font-normal">dân chơi sao phải khóc</span>
                    </Link>
                </li>
            </ul>
            {isRelate && (
                <Link className="flex items-center gap-[10px] py-[8px] px-[10px] text-purple-text-primary rounded-[4px] overflow-hidden hover:bg-purple-bg-active-items">
                    <IconContent className="text-[16px] text-purple-text-items" />
                    <span className="text-[14px] font-normal">Tìm kiếm "{keyWords}"</span>
                </Link>
            )}
        </>
    );
}

KeyWords.propTypes = {
    data: PropTypes.array.isRequired,
    keyWords: PropTypes.string,
    isRelate: PropTypes.bool,
};

export default KeyWords;

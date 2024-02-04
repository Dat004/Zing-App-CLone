import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

import WrapperItems from '../../../../components/WrapperItems';

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [isFocus, setIsFocus] = useState(false);

    const handleChangeValue = (e) => {
        const value = e.target.value;

        if (value.startsWith(' ')) {
            return;
        }

        setSearchValue(value);
    };

    return (
        <form action="" className="flex-1 max-w-[440px]">
            <div className={`flex items-center h-[40px] rounded-[30px] ${isFocus ? 'bg-purple-bg-wrapper' : 'bg-purple-bg-active-items'}`}>
                <button className="flex items-center justify-center w-[30px] h-[30px] mx-[6px]">
                    <FiSearch className="text-[20px] text-purple-text-secondary" />
                </button>
                <div className="flex flex-1 items-center leading-[32px]">
                    <input
                        className="w-[90%] bg-transparent outline-none border-none text-[14px] text-purple-text-form placeholder:text-purple-text-secondary"
                        placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát ..."
                        onChange={handleChangeValue}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        value={searchValue}
                        type="text"
                        spellCheck={false}
                    />
                </div>
                {/* <WrapperItems /> */}
            </div>
        </form>
    );
}

export default Search;

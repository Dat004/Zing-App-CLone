import { useRef, useState } from 'react';

import { AiOutlineClose } from 'react-icons/ai';
import { TfiSearch } from "react-icons/tfi";

import PopperWrapper from '../../../../components/Popper';
import SearchResults from './SearchResults';
import KeyWords from './SearchResults/KeyWords';
import Results from './SearchResults/Results';
import Button from '../../../../components/Button';

function Search() {
    const inputRef = useRef();

    const [searchValue, setSearchValue] = useState('');
    const [isFocus, setIsFocus] = useState(false);

    const handleChangeValue = (e) => {
        const value = e.target.value;

        if (value.startsWith(' ')) {
            return;
        }

        setSearchValue(value);
    };

    const handleClearValue = () => {
        setSearchValue('');

        inputRef.current.focus();
    };

    return (
        <form action="" className="relative flex-1 max-w-[440px]">
            <div
                className={`relative flex items-center h-[40px] rounded-[20px] ${
                    isFocus ? 'bg-purple-bg-wrapper rounded-b-none' : 'bg-purple-bg-active-items'
                }`}
            >
                <Button className="w-[30px] h-[30px] ml-[6px] mr-[4px]" type="button">
                    <TfiSearch className="text-[20px] text-purple-text-secondary" />
                </Button>
                <div
                    onClick={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    className="flex flex-1 items-center leading-[32px]"
                >
                    <input
                        ref={inputRef}
                        className="w-[90%] mr-[10px] bg-transparent outline-none border-none text-[14px] text-purple-text-form placeholder:text-purple-text-secondary"
                        placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
                        onChange={handleChangeValue}
                        value={searchValue}
                        type="text"
                        spellCheck={false}
                    />
                    {searchValue && (
                        <Button onClick={handleClearValue} type="button">
                            <AiOutlineClose className="text-purple-text-secondary" />
                        </Button>
                    )}
                </div>
                <div className="absolute top-[40px] left-0 w-full">
                    <PopperWrapper className="py-[13px] px-[10px] rounded-b-[20px]">
                        <SearchResults titleHeader={searchValue ? 'Từ khóa liên quan' : 'Đề xuất cho bạn'}>
                            <KeyWords isRelate={searchValue ? true : false} keyWords={searchValue}></KeyWords>
                        </SearchResults>
                        <SearchResults
                            className="mt-[10px] pt-[10px] border-t-[1px] border-t-purple-bd-primary-color"
                            titleHeader="Gợi ý kết quả"
                        >
                            <Results />
                        </SearchResults>
                    </PopperWrapper>
                </div>
            </div>
        </form>
    );
}

export default Search;

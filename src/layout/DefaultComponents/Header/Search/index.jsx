import { useRef, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDebounce } from 'use-debounce';

import { AiOutlineClose } from 'react-icons/ai';
import { TfiSearch } from 'react-icons/tfi';

import PopperWrapper from '../../../../components/Popper';
import Button from '../../../../components/Button';
import KeyWords from './SearchResults/KeyWords';
import Results from './SearchResults/Results';
import apiService from '../../../../services';
import SearchResults from './SearchResults';
import DATAS from '../../../../tempData';

function Search() {
    const DATA_SEARCH_SUGGESTIONS = DATAS.DATA_SEARCH_SUGGESTIONS;

    const { keyword } = useParams();
    const naviagate = useNavigate();
    const inputRef = useRef();

    const [searchValue, setSearchValue] = useState('');
    const [isFocus, setIsFocus] = useState(false);
    const [suggestionDataSearch, setSuggestionDataSearch] = useState({
        keywords: [],
        results: [],
    });

    const [debounce] = useDebounce(searchValue, 550);

    useEffect(() => {
        if (!debounce) {
            setSuggestionDataSearch({
                keywords: [],
                results: [],
            });

            return;
        }
    }, [debounce]);

    useEffect(() => {
        (async () => {
            if (!debounce) return;

            const data = await apiService.suggestionSearchApi(debounce);

            if (data?.data?.items[0]?.keywords)
                setSuggestionDataSearch((state) => ({ ...state, keywords: data.data.items[0].keywords }));
            if (data?.data?.items[1]?.suggestions)
                setSuggestionDataSearch((state) => ({ ...state, results: data.data.items[1].suggestions }));
            else setSuggestionDataSearch((state) => ({ ...state, results: [] }));
        })();
    }, [debounce]);

    useEffect(() => {
        // Update value in the search bar when direction changes
        setSearchValue(keyword ?? '');
    }, [keyword]);

    const handleChangeValue = (e) => {
        const value = e.target.value;

        if (value.startsWith(' ')) {
            // Check value if starts with a space
            return;
        }

        setSearchValue(value);
    };

    const handleClearValue = () => {
        setSearchValue('');
        setSuggestionDataSearch({ keywords: [], results: [] });

        inputRef.current.focus();
    };

    // Open table search results
    const handleOpenWrapper = () => {
        setIsFocus(true);
    };

    // Close table search results
    const handleCloseWrapper = () => {
        setIsFocus(false);

        inputRef.current.blur();
    };

    const handleDirectly = (e) => {
        e.preventDefault();

        if (searchValue) {
            naviagate(`/tim-kiem/${searchValue}`);

            handleCloseWrapper();
        }
    };

    return (
        <form
            onFocus={handleOpenWrapper}
            onBlur={handleCloseWrapper}
            onSubmit={handleDirectly}
            action=""
            className="relative flex-1 max-w-[440px]"
        >
            <div
                className={`relative flex items-center h-[40px] rounded-[20px] ${
                    isFocus ? 'bg-purple-bg-wrapper rounded-b-none' : 'bg-purple-bg-btn-alpha'
                }`}
            >
                <Button className="w-[30px] h-[30px] ml-[6px] mr-[4px]" type="submit">
                    <TfiSearch className="text-[20px] text-purple-text-secondary" />
                </Button>
                <div className="flex flex-1 items-center leading-[32px]">
                    <input
                        ref={inputRef}
                        className="w-[90%] mr-[10px] bg-transparent outline-none border-none text-[14px] text-purple-text-form placeholder:text-purple-text-secondary"
                        placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
                        onChange={handleChangeValue}
                        value={searchValue}
                        spellCheck={false}
                        type="text"
                    />
                    {searchValue && (
                        <Button onClick={handleClearValue} type="button">
                            <AiOutlineClose className="text-purple-text-secondary" />
                        </Button>
                    )}
                </div>
                {isFocus && (
                    <div
                        onMouseDown={(e) => e.preventDefault()}
                        onMouseUp={(e) => e.preventDefault()}
                        className="absolute top-[40px] left-0 w-full"
                    >
                        <PopperWrapper className="py-[13px] px-[10px] rounded-t-none rounded-b-[20px]">
                            <SearchResults titleHeader={searchValue ? 'Từ khóa liên quan' : 'Đề xuất cho bạn'}>
                                <KeyWords
                                    data={
                                        searchValue ? suggestionDataSearch.keywords : DATA_SEARCH_SUGGESTIONS.keywords
                                    }
                                    onClose={handleCloseWrapper}
                                    isRelate={!!searchValue}
                                    keyWords={searchValue}
                                ></KeyWords>
                            </SearchResults>
                            {!!searchValue && !!suggestionDataSearch.results.length && (
                                <SearchResults
                                    className="mt-[10px] pt-[10px] border-t-[1px] border-t-purple-bd-primary-color"
                                    titleHeader="Gợi ý kết quả"
                                >
                                    <Results data={suggestionDataSearch.results} />
                                </SearchResults>
                            )}
                        </PopperWrapper>
                    </div>
                )}
            </div>
        </form>
    );
}

export default Search;

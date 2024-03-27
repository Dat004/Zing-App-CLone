import { Fragment, useState, useRef, useReducer, useEffect } from 'react';
import { VscTriangleUp, VscTriangleDown } from 'react-icons/vsc';
import { PiEquals } from 'react-icons/pi';
import { LuMusic } from 'react-icons/lu';

import { addMusic, removeMusic } from '../../reducers/actions';
import InputCheckbox from '../InputSlider/InputCheckbox';
import reducer, { initState } from '../../reducers';
import TimeConversion from '../TimeConversion';
import NumberOutline from '../NumberOutline';
import CustomLink from '../CustomLink';
import ArtistName from '../ArtistName';
import TitleMusic from '../TitleMusic';
import CardImage from '.';

function CardMusic({
    data = [],
    isShowRankingNumber = false,
    isAllowSelect = false,
    isShowAlbum = false,
    isSuggest = false,
}) {
    const cardElementRef = useRef([]);
    const [state, dispatch] = useReducer(reducer, initState.listMusic);
    const [isChecked, setIsChecked] = useState(false);

    const handleSelect = (e, index) => {
        if (e.target.checked) {
            cardElementRef.current[index].style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
            dispatch(addMusic(data[index]));
            setIsChecked(true);
        } else {
            cardElementRef.current[index].style.backgroundColor = 'transparent';
            dispatch(removeMusic(data[index].encodeId));
            setIsChecked(false);
        };
    };

    return (
        <Fragment>
            {data?.map((items, index) => (
                <section
                    key={index}
                    ref={(ref) => (cardElementRef.current[index] = ref)}
                    className={`group/card border-b-[1px] border-b-purple-bd-secondary-color hover:bg-purple-bg-btn-alpha`}
                >
                    <div className="p-[10px] rounded-[4px]">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center w-[50%] mr-[10px]">
                                {isSuggest && (
                                    <div className="flex items-center justify-center w-[83px] mr-[15px]">
                                        <span className="text-[14px] text-purple-text-items">Gợi ý</span>
                                    </div>
                                )}
                                {isShowRankingNumber && (
                                    <div className="flex items-center mr-[15px]">
                                        <div className="flex justify-center items-center min-w-[60px] mr-[5px]">
                                            <NumberOutline
                                                isFirst={index === 0}
                                                isSecond={index === 1}
                                                isThird={index === 2}
                                            >
                                                {++index}
                                            </NumberOutline>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            {items?.rakingStatus === 0 ? (
                                                <i className="text-[18px] text-purple-text-items">
                                                    <PiEquals />
                                                </i>
                                            ) : (
                                                <Fragment>
                                                    {items?.rakingStatus > 0 ? (
                                                        <i className="text-[18px] text-up-color">
                                                            <VscTriangleUp />
                                                        </i>
                                                    ) : (
                                                        <i className="text-[18px] text-down-color">
                                                            <VscTriangleDown />
                                                        </i>
                                                    )}
                                                    <span className="text-[12px] font-bold text-purple-text-primary">
                                                        {items?.rakingStatus}
                                                    </span>
                                                </Fragment>
                                            )}
                                        </div>
                                    </div>
                                )}
                                {isAllowSelect && (
                                    <Fragment>
                                        <div
                                            className={`group-hover/card:hidden ${
                                                state.length ? 'hidden' : 'block'
                                            } min-w-[14px] mr-[10px]`}
                                        >
                                            <div className={`flex items-center justify-center`}>
                                                <i className="flex-grow flex-shrink-0 text-[14px] text-purple-text-items">
                                                    <LuMusic />
                                                </i>
                                            </div>
                                        </div>
                                        <div
                                            className={`group-hover/card:block ${
                                                state.length ? 'block' : 'hidden'
                                            } min-w-[14px] mr-[10px]`}
                                        >
                                            <div className="flex items-center justify-center">
                                                <span className="relative flex-grow flex-shrink-0">
                                                    <InputCheckbox
                                                        className="checked:border-purple-bd-white-color"
                                                        id={index}
                                                        handleChange={handleSelect}
                                                    />
                                                </span>
                                            </div>
                                        </div>
                                    </Fragment>
                                )}
                                <div className="mr-[10px]">
                                    <CardImage src={items?.thumbnailM} small />
                                </div>
                                <div className="w-0 flex-shrink flex-grow">
                                    <TitleMusic>{items?.title}</TitleMusic>
                                    <ArtistName className="mt-[3px]" artistData={items?.artists} smallSize />
                                </div>
                            </div>
                            {isShowAlbum && (
                                <div className="flex justify-start flex-shrink flex-grow w-0 MS:hidden">
                                    <p className="text-[12px] text-purple-text-items">
                                        <CustomLink isHover isUnderline>
                                            {items?.album?.title}
                                        </CustomLink>
                                    </p>
                                </div>
                            )}
                            <div className="flex justify-center flex-shrink-0 min-w-[66px] ml-[10px]">
                                <TimeConversion duration={items?.duration} isDark />
                            </div>
                        </div>
                    </div>
                </section>
            ))}
        </Fragment>
    );
}

export default CardMusic;

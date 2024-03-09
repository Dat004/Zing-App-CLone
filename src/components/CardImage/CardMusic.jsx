import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { VscTriangleUp, VscTriangleDown } from 'react-icons/vsc';
import { PiEquals } from 'react-icons/pi';

import CardImage from '.';
import TimeConversion from '../TimeConversion';
import ArtistName from '../ArtistName';
import NumberOutline from '../NumberOutline';

function CardMusic({ data = [] }) {
    return (
        <div className="mb-[20px]">
            <Fragment>
                {data?.map((items, index) => (
                    <section key={index} className="border-b-[1px] border-b-purple-bd-secondary-color hover:bg-purple-bg-btn-alpha">
                        <div className="p-[10px] rounded-[4px]">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center w-[50%] mr-[10px]">
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
                                    <div className="mr-[10px]">
                                        <CardImage src={items?.thumbnailM} small />
                                    </div>
                                    <div className="w-0 flex-shrink flex-grow">
                                        <p className="text-[14px] text-purple-text-primary font-medium leading-[1.3]">
                                            <span className="leading-[1.3]">{items?.title}</span>
                                        </p>
                                        <ArtistName className="mt-[3px]" artistData={items?.artists} smallSize />
                                    </div>
                                </div>
                                <div className="flex justify-start flex-shrink flex-grow MS:hidden">
                                    <p className="text-[12px] text-purple-text-items">
                                        <Link className="hover:text-link-text-hover hover:underline">
                                            {items?.album?.title}
                                        </Link>
                                    </p>
                                </div>
                                <div className="flex justify-center flex-shrink-0 ml-[10px]">
                                    <TimeConversion duration={items?.duration} isDark />
                                </div>
                            </div>
                        </div>
                    </section>
                ))}
            </Fragment>
        </div>
    );
}

export default CardMusic;

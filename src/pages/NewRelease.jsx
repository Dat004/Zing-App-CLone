import { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { VscTriangleUp, VscTriangleDown } from 'react-icons/vsc';
import { PiEquals } from 'react-icons/pi';

import { PlayBoldIcon } from '../components/CustomIcon';
import apiService from '../apiProvider';
import CardImage from '../components/CardImage';
import TimeConversion from '../components/TimeConversion';

function NewRelease() {
    const [newData, setNewData] = useState({});

    useEffect(() => {
        (async () => {
            const data = await apiService.newReleaseApi();

            setNewData({ ...data?.data });
        })();
    }, []);

    return (
        <div className="mt-[70px]">
            <div className="pt-[40px]">
                {Object.keys(newData).length > 0 ? (
                    <Fragment>
                        <header className="flex items-center mb-[32px]">
                            <h3 className="text-[40px] leading-[1.225] font-bold text-purple-text-primary">
                                {newData?.title}
                            </h3>
                            <i className="ml-[10px] hover:opacity-90 cursor-pointer">
                                <PlayBoldIcon />
                            </i>
                        </header>
                        <div className="mb-[20px]">
                            <Fragment>
                                {newData?.items?.map((items, index) => (
                                    <section key={index} className="border-b-[1px] border-b-purple-bd-secondary-color">
                                        <div className="p-[10px] rounded-[4px]">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center w-[50%] mr-[10px]">
                                                    <div className="flex items-center mr-[15px]">
                                                        <span
                                                            style={{ WebkitTextStroke: '1px #4a90e2' }}
                                                            className="inline-block min-w-[60px] mr-[5px] text-center text-[32px] leading-[1.25] font-bold"
                                                        >
                                                            {++index}
                                                        </span>
                                                        <div className='flex flex-col items-center'>
                                                            {items?.rakingStatus === 0 ? (
                                                                <i className="text-[18px] text-purple-text-items">
                                                                    <PiEquals />
                                                                </i>
                                                            ) : items?.rakingStatus > 0 ? (
                                                                <Fragment>
                                                                    <i className="text-[18px] text-up-color">
                                                                        <VscTriangleUp />
                                                                    </i>
                                                                    <span className='text-[12px] font-bold text-purple-text-primary'>{items?.rakingStatus}</span>
                                                                </Fragment>
                                                            ) : (
                                                                <Fragment>
                                                                    <i className="text-[18px] text-down-color">
                                                                        <VscTriangleDown />
                                                                    </i>
                                                                    <span className='text-[12px] font-bold text-purple-text-primary'>{items?.rakingStatus}</span>
                                                                </Fragment>
                                                            ) }
                                                        </div>
                                                    </div>
                                                    <div className="mr-[10px]">
                                                        <CardImage src={items?.thumbnailM} small />
                                                    </div>
                                                    <div className="w-0 flex-shrink flex-grow">
                                                        <p className="text-[14px] text-purple-text-primary font-medium leading-[1.3]">
                                                            <span className="leading-[1.3]">{items?.title}</span>
                                                        </p>
                                                        <p className="text-[12px] text-purple-text-items mt-[3px] leading-[1.33]">
                                                            <span>{items?.artistsNames}</span>
                                                        </p>
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
                    </Fragment>
                ) : null}
            </div>
        </div>
    );
}

export default NewRelease;

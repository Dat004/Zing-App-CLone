import PropTypes from 'prop-types';
import { Fragment, useEffect, useRef, useState } from 'react';
import { SlArrowRight, SlArrowLeft } from 'react-icons/sl';

import Button from '../Button';
import SkeletonLoading from '../SkeletonLoading';
import CardImage from '../CardImage';

function SliderBanner({ data = [] }) {
    const bannerRef = useRef(null);
    const [height, setHeight] = useState();
    const [stylesBanner, setStylesBanner] = useState([
        {
            translateX: '0',
            zIndex: 1,
            opacity: 1,
        },
        {
            translateX: '100%',
            zIndex: 1,
            opacity: 1,
        },
        {
            translateX: '200%',
            zIndex: 1,
            opacity: 1,
        },
        {
            translateX: '100%',
            zIndex: 0,
            opacity: 0,
        },
    ]);

    useEffect(() => {
        setHeight(bannerRef.current?.clientHeight);
    }, [data]);

    useEffect(() => {
        const handleResize = () => {
            setHeight(bannerRef.current?.clientHeight);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        let timeOut;

        if (data.length > 0) {
            timeOut = setTimeout(() => {
                nextBanner();
            }, 4500);
        }

        return () => {
            clearTimeout(timeOut);
        };
    }, [stylesBanner]);

    const nextBanner = () => {
        const getLastElementArray = stylesBanner.pop();

        setStylesBanner((state) => [getLastElementArray, ...state]);
    };

    const prevBanner = () => {
        const getFirstElementArray = stylesBanner.shift();

        setStylesBanner((state) => [...state, getFirstElementArray]);
    };

    return (
        <div className="w-full">
            <div className="pt-[32px]">
                <section
                    style={{ height: height + 'px' }}
                    className="group/banners flex relative XM:mx-[-12px] mx-[-15px] mb-[20px] overflow-hidden"
                >
                    {data.length > 0 ? (
                        <Fragment>
                            <div className="group-hover/banners:block hidden absolute top-[50%] left-[25px] translate-y-[-50%] z-10">
                                <Button
                                    onClick={prevBanner}
                                    className="w-[55px] h-[55px] !bg-purple-bg-btn hover:opacity-80"
                                    rounded
                                >
                                    <SlArrowLeft className="text-[26px]" />
                                </Button>
                            </div>
                            <div
                                style={{
                                    transition:
                                        'transform 0.5s ease-in-out, opacity 0.45s ease-in-out 0.15s, z-index 0s linear 0.25s',
                                    transform: '100%',
                                    zIndex: '0',
                                    opacity: '0',
                                }}
                                ref={bannerRef}
                                className={`absolute translate-x-[100%] XM:min-w-[50%] XM:px-[12px] w-[33.33%] XM:w-[50%] px-[15px]`}
                            >
                                <div className="pb-[56.25%]"></div>
                            </div>
                            {data.map((items, index) => (
                                <div
                                    // style={{
                                    //     transition:
                                    //         'transform 0.5s ease-in-out, opacity 0.45s ease-in-out 0.15s, z-index 0s linear 0.25s',
                                    //     transform: `translateX(${stylesBanner[index].translateX})`,
                                    //     zIndex: `${stylesBanner[index].zIndex}`,
                                    //     opacity: `${stylesBanner[index].opacity}`,
                                    // }}
                                    key={index}
                                    className={`absolute translate-x-[100%] XM:min-w-[50%] XM:px-[12px] w-[33.33%] XM:w-[50%] px-[15px]`}
                                >
                                    <div className="w-full max-w-full">
                                        <CardImage className="rounded-[8px]" src={items?.banner} />
                                    </div>
                                </div>
                            ))}
                            <div className="group-hover/banners:block hidden absolute top-[50%] right-[25px] translate-y-[-50%] z-10">
                                <Button
                                    onClick={nextBanner}
                                    className="w-[55px] h-[55px] !bg-purple-bg-btn hover:opacity-80"
                                    rounded
                                >
                                    <SlArrowRight className="text-[26px]" />
                                </Button>
                            </div>
                        </Fragment>
                    ) : (
                        <div className="flex justify-center h-[212px] w-full">
                            <div className="w-full max-w-[970px] h-full text-center">
                                <SkeletonLoading />
                            </div>
                        </div>
                    )}
                </section>
            </div>
        </div>
    );
}

SliderBanner.propTypes = {
    data: PropTypes.array,
};

export default SliderBanner;

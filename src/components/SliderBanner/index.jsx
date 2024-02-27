import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import { SlArrowRight, SlArrowLeft } from 'react-icons/sl';

import Button from '../Button';
import SkeletonLoading from '../SkeletonLoading';
import CardImage from '../CardImage';

function SliderBanner({ data }) {
    const bannerRef = useRef();
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

    const bannerArrays = [
        'https://photo-zmp3.zmdcdn.me/banner/a/a/2/6/aa26efe8ca3c4db362db11ba098fd782.jpg',
        'https://photo-zmp3.zmdcdn.me/banner/0/b/1/8/0b182ba7a0dfa01ce96907a2f7d37842.jpg',
        'https://photo-zmp3.zmdcdn.me/banner/c/3/c/1/c3c15e68d3d889c14a3f96301cb92168.jpg',
        'https://photo-zmp3.zmdcdn.me/banner/5/9/6/5/5965e6fa7a7f277cb55ffcd8f2d5663c.jpg',
    ];

    useEffect(() => {
        setHeight(bannerRef.current?.clientHeight);
    }, [bannerRef.current]);

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
        const timeOut = setTimeout(() => {
            nextBanner();
        }, 4500);

        return () => {
            clearInterval(timeOut);
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
                    className="group/banners flex relative XM:mx-[-12px] mx-[-15px] mb-[20px]"
                >
                    <div className="h-[212px] w-full">
                        <div className="w-full h-full text-center">
                            <SkeletonLoading className='max-w-[970px]' />
                        </div>
                    </div>
                    {/* <div className="group-hover/banners:block hidden absolute top-[50%] left-[25px] translate-y-[-50%] z-10">
                        <Button
                            onClick={prevBanner}
                            className="w-[55px] h-[55px] !bg-purple-bg-btn hover:opacity-80"
                            rounded
                        >
                            <SlArrowLeft className="text-[26px]" />
                        </Button>
                    </div>
                    {bannerArrays.map((items, index) => (
                        <div
                            style={{
                                transition:
                                    'transform 0.5s ease-in-out, opacity 0.45s ease-in-out 0.15s, z-index 0s linear 0.25s',
                                transform: `translateX(${stylesBanner[index].translateX})`,
                                zIndex: `${stylesBanner[index].zIndex}`,
                                opacity: `${stylesBanner[index].opacity}`,
                            }}
                            key={index}
                            ref={bannerRef}
                            className={`absolute translate-x-[100%] XM:min-w-[50%] XM:px-[12px] w-[33.33%] XM:w-[50%] px-[15px]`}
                        >
                            <div className="w-full max-w-full">
                                <CardImage className="rounded-[8px]" src={items} />
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
                    </div> */}
                </section>
            </div>
        </div>
    );
}
// https://photo-zmp3.zmdcdn.me/banner/0/b/1/8/0b182ba7a0dfa01ce96907a2f7d37842.jpg

export default SliderBanner;

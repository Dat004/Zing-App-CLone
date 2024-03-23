import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import PlayLists from '../PlayLists';

function SliderPlaylist({ data = [], title = '' }) {
    const sliderRef = useRef();
    const [stateSlider, setStateSlider] = useState({
        counter: 0,
        current: 0,
    });
    const [isSliderRunning, setIsSliderRunning] = useState(true);

    useEffect(() => {
        let timeOut;

        if (sliderRef.current && isSliderRunning) {
            timeOut = setTimeout(() => {
                nextSlider();
            }, 3000);
        }

        return () => {
            clearTimeout(timeOut);
        };
    }, [stateSlider.counter, isSliderRunning]);

    const handleStopSlider = () => {
        if (isSliderRunning) {
            setIsSliderRunning(false);
        }
    };

    const handlePlaySlider = () => {
        if (!isSliderRunning) {
            setIsSliderRunning(true);
        }
    };

    const nextSlider = () => {
        const nextTimes = Math.floor(sliderRef.current.scrollWidth / sliderRef.current.offsetWidth - 1);

        const totalSizeOfElements = Number(sliderRef.current.scrollWidth);
        const totalSizeOnScreen = Number(sliderRef.current.offsetWidth);
        const totalSizeResidual = totalSizeOfElements % totalSizeOnScreen;

        if (stateSlider.counter < nextTimes) {
            setStateSlider((prev) => ({
                ...prev,
                counter: stateSlider.counter + 1,
                current: stateSlider.current + sliderRef.current.offsetWidth,
            }));
        } else if (stateSlider.counter === nextTimes) {
            if (totalSizeResidual !== 0) {
                setStateSlider((prev) => ({
                    ...prev,
                    counter: stateSlider.counter + 1,
                    current: stateSlider.current + totalSizeResidual,
                }));
            } else {
                setStateSlider((prev) => ({
                    ...prev,
                    counter: 0,
                    current: 0,
                }));
            }
        } else {
            setStateSlider((prev) => ({
                ...prev,
                counter: 0,
                current: 0,
            }));
        }

        // console.log(stateSlider.current, stateSlider.counter, totalSizeOnScreen, totalSizeResidual, totalSizeOfElements);

        sliderRef.current.style.transform = `translateX(${-stateSlider.current}px)`;
        sliderRef.current.style.transition = 'transform 0.3s ease 1s';
    };

    return (
        <div className="w-full" onMouseEnter={handleStopSlider} onMouseLeave={handlePlaySlider}>
            <PlayLists
                refElement={sliderRef}
                isHeader
                isSeeAll
                isShowArtists
                isShowTitlePlaylist
                title={title}
                data={data}
            />
        </div>
    );
};

SliderPlaylist.propTypes = {
    children: PropTypes.string,
    data: PropTypes.array,
};

export default SliderPlaylist;

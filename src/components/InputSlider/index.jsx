import { useState } from 'react';

function InputSlider({
    className,
    onChange = () => {},
    heigthSlider = '2px',
    widthSlider = '100%',
    borderSlider = '4px',
    heigthSliderHover = '2px',
    heightThumb = '8px',
    widthThumb = '8px',
    min = 0,
    max = 100,
    step = 0.001,
}) {
    const [value, setValue] = useState(min);

    const sliderStyles = {
        width: widthSlider,
        height: heigthSlider,
        borderRadius: borderSlider,
    };
    
    const thumbStyles = {
        width: widthThumb,
        height: heightThumb,
        left: `calc(${(value / max) * 100}%)`,
    };
    
    const trackStyles = {
        width: `calc(${(value / max) * 100}%)`,
        borderRadius: borderSlider,
    };

    const handleChangeValue = (e) => {
        setValue(e.target.value);
    };

    return (
        <div className={`${className || ''} group/items flex items-center`}>
            <div style={sliderStyles} className="relative flex items-center bg-bg-slider">
                <input
                    onChange={(e) => {
                        handleChangeValue(e);
                        onChange(e);
                    }}
                    className="h-full w-full"
                    type="range"
                    name="slider"
                    id="slider"
                    min={min}
                    max={max}
                    value={value}
                    step={step}
                />
                <span
                    style={thumbStyles}
                    className={`hidden group-hover/items:block absolute top-[50%] left-0 bg-bg-current-slider rounded-[50%] translate-x-[-50%] translate-y-[-50%] pointer-events-none`}
                ></span>
                <span
                    style={trackStyles}
                    className="absolute top-0 left-0 h-full max-w-full bg-bg-current-slider pointer-events-none rounded-[4px]"
                ></span>
            </div>
        </div>
    );
}

export default InputSlider;

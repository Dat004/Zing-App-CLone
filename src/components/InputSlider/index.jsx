import classNames from 'classnames';

function InputSlider({
    className,
    onChange = () => {},
    heigthSlider = '2px',
    hoverHeightSlider = '4px',
    widthSlider = '100%',
    borderSlider = '4px',
    heightThumb = '8px',
    widthThumb = '8px',
    value = 0,
    min = 0,
    max = 100,
    step = 0.001,
    ...props
}) {
    const sliderWrapperStyles = classNames('group/items flex items-center cursor-pointer', {
        [className]: className,
    });

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

    return (
        <div className={sliderWrapperStyles}>
            <div style={sliderStyles} className="relative flex items-center bg-bg-slider">
                <input
                    onChange={onChange}
                    className="h-full w-full"
                    type="range"
                    name="slider"
                    id="slider"
                    value={value}
                    min={min}
                    max={max}
                    step={step}
                    {...props}
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

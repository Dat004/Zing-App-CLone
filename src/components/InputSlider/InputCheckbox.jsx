import { useState } from 'react';
import classNames from 'classnames';

function InputCheckbox({ className, id = 0, handleChange = () => {}, ...passprops }) {
    const [isChecked, setIsChecked] = useState(false);

    const checkboxClasses = classNames(
        'appearance-none p-[6px] border border-solid border-purple-bd-box-color rounded-[3px] cursor-pointer checked:bg-purple-bg-select-box',
        {
            [className]: className,
        },
    );

    const handleChangeValue = (e, id) => {
        handleChange(e, id);

        if (e.target.checked) {
            setIsChecked(e.target.checked);
        } else {
            setIsChecked(e.target.checked);
        }
    };

    return (
        <>
            <input
                className={checkboxClasses}
                onChange={(e) => handleChangeValue(e, id)}
                type="checkbox"
                {...passprops}
            />
            {isChecked && (
                <span className="absolute w-[60%] h-[15%] top-1/2 left-1/2 border-solid border-transparent border-0 border-l-white border-b-white border-l-[2px] border-b-[2px] translate-x-[-50%] translate-y-[-100%] rotate-[-45deg] pointer-events-none"></span>
            )}
        </>
    );
}

export default InputCheckbox;

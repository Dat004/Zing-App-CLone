import { useEffect, useState } from 'react';
import classNames from 'classnames';

function InputCheckbox({ className, checked = false, handleChange = () => {}, ...passprops }) {
    const [isChecked, setIsChecked] = useState(checked);

    useEffect(() => {
        setIsChecked(checked);
    }, [checked]);

    const checkboxClasses = classNames(
        'appearance-none p-[6px] border border-solid border-purple-bd-box-color rounded-[3px] cursor-pointer checked:bg-purple-bg-select-box',
        {
            [className]: className,
        },
    );

    const handleChangeValue = (e) => {
        const index = e.target.dataset.index;

        handleChange(e, index);

        if (e.target.checked) {
            setIsChecked(e.target.checked);
        } else {
            setIsChecked(e.target.checked);
        }
    };

    return (
        <span className="relative flex items-center">
            <input
                className={checkboxClasses}
                checked={isChecked}
                onChange={handleChangeValue}
                type="checkbox"
                {...passprops}
            />
            {isChecked && (
                <span className="absolute w-[60%] h-[30%] top-1/2 left-1/2 border-solid border-transparent border-0 border-l-white border-b-white border-l-[2px] border-b-[2px] translate-x-[-50%] translate-y-[-75%] rotate-[-45deg] pointer-events-none"></span>
            )}
        </span>
    );
}

export default InputCheckbox;

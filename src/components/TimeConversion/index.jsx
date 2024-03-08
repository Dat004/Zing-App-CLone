import classNames from 'classnames';

import { useTime } from '../../hooks';

function TimeConversion({ className, duration, isDark = false, isLight = false }) {
    const { seconds, minutes } = useTime(duration);

    const timeClasses = classNames('flex items-center justify-center min-w-[46px] text-[12px] font-medium', {
        [className]: className,
        'text-purple-text-items': isDark,
        'text-purple-text-primary': isLight,
    });

    return (
        <div className={timeClasses}>
            <span>
                {minutes}:{seconds}
            </span>
        </div>
    );
}

export default TimeConversion;

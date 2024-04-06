import PropTypes from 'prop-types';
import classNames from 'classnames';

import { useTime } from '../../hooks';

function TimeConversion({
    className,
    duration,
    isMilitaryTime = false,
    isHoursWithMinutes = false,
    isFontColorDark = false,
    isFontColorLight = false,
}) {
    const { seconds, minutes, totalMinutes, hours } = useTime(duration);

    const timeClasses = classNames('text-[12px] font-medium', {
        [className]: className,
        'text-purple-text-items': isFontColorDark,
        'text-purple-text-primary': isFontColorLight,
    });

    return (
        <span className={timeClasses}>
            {isMilitaryTime && (
                <span>
                    {totalMinutes}:{seconds}
                </span>
            )}
            {isHoursWithMinutes && (
                <span>
                    {hours} giờ {minutes} phút
                </span>
            )}
        </span>
    );
};

TimeConversion.propTypes = {
    className: PropTypes.string,
    duration: PropTypes.number,
    isMilitaryTime: PropTypes.bool,
    isHoursWithMinutes: PropTypes.bool,
    isFontColorDark: PropTypes.bool,
    isFontColorLight: PropTypes.bool,
};

export default TimeConversion;

import classNames from 'classnames';

import { useConvertTimestamps } from '../../hooks';

function FullTime({ className, timestamps = 0, getFull = false, getYear = false, getMonth = false, getDay = false }) {
    const { days, months, years } = useConvertTimestamps(timestamps);

    const fullTimeClasses = classNames('leading-[1.75] font-meidum', {
        [className]: className,
    });

    return (
        <>
            {getFull && <span className={fullTimeClasses}>{`${days}/${months}/${years}`}</span>}
            {getYear && <span className={fullTimeClasses}>{years}</span>}
            {getMonth && <span className={fullTimeClasses}>{months}</span>}
            {getDay && <span className={fullTimeClasses}>{days}</span>}
        </>
    );
}

export default FullTime;

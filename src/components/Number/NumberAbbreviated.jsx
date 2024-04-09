import classNames from 'classnames';

import { useFormatAbbreviatedNumber } from '../../hooks';

function NumberAbbreviated({ className, number = 0 }) {
    const { numberAbbreviated } = useFormatAbbreviatedNumber(number);

    const numberClasses = classNames('text-[12px] text-purple-text-items font-normal', {
        [className]: className,
    });

    return <span className={numberClasses}>{numberAbbreviated}</span>;
};

export default NumberAbbreviated;

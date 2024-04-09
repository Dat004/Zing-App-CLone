import classNames from 'classnames';

import { useFormatNumberWithDots } from '../../hooks';

function NumberDots({ className, number = 0 }) {
    const { dotsNumber } = useFormatNumberWithDots(number);

    const numberDotsClasses = classNames('text-purple-text-primary', {
        [className]: className,
    });

    return <span className={numberDotsClasses}>{dotsNumber}</span>;
}

export default NumberDots;

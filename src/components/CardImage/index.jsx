import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import Image from '../Image';

function CardMusic({ src, className, rounded = false, small = false, medium = false, large = false, larger = false }) {
    const cardClasses = classNames('overflow-hidden', {
        [className]: className,
        'size-small': small,
        'size-medium': medium,
        'size-large': large,
        'size-larger': larger,
    });

    return (
        <div>
            <section className={cardClasses}>
                <span className="block h-full w-full">
                    <Image rounded={rounded} className="rounded-[4px]" src={src} />
                </span>
            </section>
        </div>
    );
}

CardMusic.propTypes = {
    data: PropTypes.object,
    className: PropTypes.string,
    small: PropTypes.bool,
    medium: PropTypes.bool,
    large: PropTypes.bool,
    larger: PropTypes.bool,
};

export default CardMusic;

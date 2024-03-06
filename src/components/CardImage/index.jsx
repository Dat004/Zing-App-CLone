import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import Image from '../Image';

function CardImage({
    src,
    className,
    borderRadius = '4px',
    isScale = false,
    rounded = false,
    small = false,
    medium = false,
    large = false,
    larger = false,
}) {
    const cardClasses = classNames(`rounded-[${borderRadius}]`, {
        [className]: className,
        'size-small': small,
        'size-medium': medium,
        'size-large': large,
        'size-larger': larger,
    });

    return (
        <section className={cardClasses}>
            <span className="block h-full w-full">
                <Image rounded={rounded} className={`rounded-[${borderRadius}] ${isScale && 'hover:scale-[1.1]'}`} src={src} />
            </span>
        </section>
    );
}

CardImage.propTypes = {
    data: PropTypes.object,
    className: PropTypes.string,
    small: PropTypes.bool,
    medium: PropTypes.bool,
    large: PropTypes.bool,
    larger: PropTypes.bool,
};

export default CardImage;

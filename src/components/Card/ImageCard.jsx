import PropTypes from 'prop-types';
import classNames from 'classnames';

import Image from '../Image';

function ImageCard({
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
        <div className={cardClasses}>
            <Image
                rounded={rounded}
                className={`rounded-[${borderRadius}] ${isScale && 'hover:scale-[1.1]'}`}
                src={src}
            />
        </div>
    );
}

ImageCard.propTypes = {
    data: PropTypes.object,
    className: PropTypes.string,
    small: PropTypes.bool,
    medium: PropTypes.bool,
    large: PropTypes.bool,
    larger: PropTypes.bool,
};

export default ImageCard;

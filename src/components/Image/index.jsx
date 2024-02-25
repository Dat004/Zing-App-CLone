import PropTypes from 'prop-types';
import { useState } from 'react';
import classNames from 'classnames';

import images from '../../assets/images';

function Image({ className, rounded = false, src, alt , ...props }) {
    const [fallBack, setFallBack] = useState(src);

    const imagesClasses = classNames('h-full w-full', {
        [className]: className,
        'rounded-[50%]': rounded,
    });

    const handleFallback = () => {
        setFallBack(images.logoTitle);
    };

    return <img className={imagesClasses} src={fallBack || src} alt={alt} onError={handleFallback} {...props} />;
}

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    rounded: PropTypes.bool,
    props: PropTypes.any,
};

export default Image;

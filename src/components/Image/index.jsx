import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import classNames from 'classnames';

import images from '../../assets/images';

function Image({ className, rounded = false, src, alt, ...props }) {
    const [fallBack, setFallBack] = useState(src);

    const variants = {
        hide: {
            opacity: 0,
        },
        show: {
            opacity: 1,
        },
    };

    useEffect(() => {
        setFallBack(src);
    }, [src]);

    const imagesClasses = classNames(
        'w-full h-auto object-cover transition-transform duration-[700ms] will-change-auto',
        {
            [className]: className,
            'rounded-[50%]': rounded,
        },
    );

    const handleFallback = () => {
        setFallBack(images.logoTitle);
    };

    return (
        <motion.img
            initial="hide"
            animate="show"
            variants={variants}
            transition={{ duration: 0.8 }}
            className={imagesClasses}
            src={fallBack || src}
            alt={alt}
            onError={handleFallback}
            {...props}
        />
    );
}

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    rounded: PropTypes.bool,
    props: PropTypes.any,
};

export default Image;

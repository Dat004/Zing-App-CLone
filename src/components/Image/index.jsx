import PropTypes from 'prop-types';
import { useState } from 'react';

import images from '../../assets/images';

function Image({ src, alt, widthImg, heightImg, bdRadius = '4px', props }) {
    const [fallBack, setFallBack] = useState();

    const handleFallback = () => {
        setFallBack(images.logoTitle);
    };

    return (
        <div style={{ width: widthImg, height: heightImg }} className="flex">
            <div className="flex-fit">
                <img
                    className={`w-full h-full object-cover rounded-[${bdRadius}]`}
                    src={src || fallBack}
                    alt={alt}
                    onError={handleFallback}
                    {...props}
                />
            </div>
        </div>
    );
}

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    widthImg: PropTypes.string,
    heightImg: PropTypes.string,
    props: PropTypes.any,
};

export default Image;

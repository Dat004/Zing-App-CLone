import PropTypes from 'prop-types';
import classNames from 'classnames';

import SkeletonLoading from './index';

function ThumbnailSkeleton({
    className,
    circle = false,
    tinySize = false,
    extraSmallSize = false,
    smallSize = false,
    smallMediumSize = false,
    mediumSize = false,
    mediumLargeSize = false,
    largeSize = false,
    extraLargeSize = false,
}) {
    const thumbnailClasses = classNames('flex-shrink-0', {
        [className]: className,
        'rounded-[50%]': circle,
        'size-size-0.3': tinySize,
        'size-size-0.4': extraSmallSize,
        'size-size-0.6': smallSize,
        'size-size-1.4': smallMediumSize,
        'size-size-1.5': mediumSize,
        'size-size-2.0': mediumLargeSize,
        'size-size-2.7': largeSize,
        'size-size-3.0': extraLargeSize,
    });

    return (
        <div className={thumbnailClasses}>
            <SkeletonLoading />
        </div>
    );
}

ThumbnailSkeleton.propTypes = {
    className: PropTypes.string,
    tinySize: PropTypes.bool,
    extraSmallSize: PropTypes.bool,
    smallSize: PropTypes.bool,
    smallMediumSize: PropTypes.bool,
    mediumSize: PropTypes.bool,
    mediumLargeSize: PropTypes.bool,
    largeSize: PropTypes.bool,
    extraLargeSize: PropTypes.bool,
};

export default ThumbnailSkeleton;

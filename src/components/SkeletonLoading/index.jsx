import classNames from 'classnames';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function SkeletonLoading({ className, duration = 2, count = 1, borderRadius = '4px', circle = false }) {
    const skeletonClasses = classNames('inline-block w-full h-full after:bg-linear-loading after:bg-no-repeat after:bg-[length:200px_100%]', {
        [className]: className,
    });

    return (
        <SkeletonTheme
            width="100%"
            height="100%"
            baseColor="rgba(255, 255, 255, 0.1)"
            highlightColor="rgba(255, 255, 255, 0.1)"
        >
            <Skeleton
                borderRadius={borderRadius}
                circle={circle}
                className={skeletonClasses}
                duration={duration}
                count={count}
            />
        </SkeletonTheme>
    );
}

export default SkeletonLoading;

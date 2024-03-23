import classNames from 'classnames';

function PageLoader({ children, className, isMaskLayer = false }) {
    const pageLoaderClasses = classNames('w-full min-h-heigth-loading-layout mt-[100px]', {
        [className]: className,
        'mask-loading': isMaskLayer,
    });

    return <div className={pageLoaderClasses}>{children}</div>;
}

export default PageLoader;

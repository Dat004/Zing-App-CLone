import PropTypes from 'prop-types';
import classNames from 'classnames';

function PopperWrapper({ children, className }) {
    const wrapperClasses = classNames('bg-purple-bg-wrapper rounded-[8px]', {
        [className]: className,
    });

    return <div className={wrapperClasses}>{children}</div>;
}

export default PopperWrapper;

import PropTypes from 'prop-types';
import classNames from 'classnames';

function PopperWrapper({ children, className }) {
    const wrapperClasses = classNames('bg-purple-bg-wrapper rounded-[8px]', {
        [className]: className,
    });

    return <div className={wrapperClasses}>{children}</div>;
}

PopperWrapper.propTypes = {
    chidren: PropTypes.node,
    classNames: PropTypes.string,
};

export default PopperWrapper;

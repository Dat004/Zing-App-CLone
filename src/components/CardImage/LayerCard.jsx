import PropTypes from 'prop-types';
import classNames from 'classnames';

function LayerCard({ children, className }) {
    const layerClasses = classNames('absolute inset-0 bg-purple-bg-layer', {
        [className]: className,
    });

    return <div className={layerClasses}>{children}</div>;
}

LayerCard.propTypes = {
    children: PropTypes.node,
    classNames: PropTypes.string,
};

export default LayerCard;

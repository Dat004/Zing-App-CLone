import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

function CustomLink({ children, to = '', className, isHover = false, isUnderline = false, ...passProps }) {
    const linkClasses = classNames(className, {
        'hover:text-link-text-hover': isHover,
        'hover:underline': isUnderline && isHover,
    });

    return (
        <Link to={to} className={linkClasses} {...passProps}>
            {children}
        </Link>
    );
}

CustomLink.propTypes = {
    children: PropTypes.node,
    to: PropTypes.string,
    classNames: PropTypes.string,
};

export default CustomLink;

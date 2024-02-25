import PropTypes from 'prop-types';
import classNames from 'classnames';

import PopperWrapper from '.';
import Tippy from '../Tippy';

function MenuWrapper({ children, className, menuItems, ...passProps }) {
    const menuClasses = classNames(className);

    const props = {
        ...passProps,
    };

    return (
        <Tippy
            // visible={showMenu}
            // onClickOutside={handleCloseMenu}
            interactive
            renderComponent={<PopperWrapper className={menuClasses}>{menuItems}</PopperWrapper>}
            {...props}
        >
            {children}
        </Tippy>
    );
}

export default MenuWrapper;

import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import Button from '.';

function TabsButton({
    children,
    className,
    to = '',
    heightBarActive = '3px',
    isActive = false,
    isHover = false,
    ...props
}) {
    const classes = classNames('py-[15px] text-[24px] uppercase font-bold', {
        [className]: className,
        'text-purple-text-primary': isActive,
        'text-purple-text-secondary': !isActive,
        'hover:text-purple-text-primary': isHover,
    });

    return (
        <NavLink to={to}>
            <div className="relative">
                <Button className={classes} {...props}>
                    {children}
                    {isActive && (
                        <span
                            style={{ height: heightBarActive }}
                            className="absolute left-0 bottom-0 w-full bg-bg-purple"
                        ></span>
                    )}
                </Button>
            </div>
        </NavLink>
    );
}

export default TabsButton;

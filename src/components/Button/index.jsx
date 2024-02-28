import PropTypes from 'prop-types';
import classNames from 'classnames';
import { forwardRef } from 'react';

const Button = forwardRef(
    (
        {
            children,
            className,
            leftIcon,
            rightIcon,
            primary = false,
            outline = false,
            rounded = false,
            disabled = false,
            large = false,
            medium = false,
            small = false,
            onClick,
            ...passProps
        },
        ref,
    ) => {
        const props = {
            onClick,
            ...passProps,
        };
        const buttonClasses = classNames('flex items-center justify-center text-purple-text-primary', {
            [className]: className,
            'border border-solid border-purple-bd-purple-color bg-purple-bg rounded-[100px]': primary,
            'border border-solid border-purple-bd-primary-color bg-transparent rounded-[100px]': outline,
            'bg-transparent border-none rounded-[50%] hover:bg-purple-bg-active-items': rounded,
            'min-w-[144px]': large,
            'min-w-[120px]': medium,
            'min-w-[90px]': small,
            'opacity-30': disabled,
        });

        return (
            <button ref={ref} className={buttonClasses} disabled={disabled} {...props}>
                {leftIcon && <span>{leftIcon}</span>}
                {children}
                {rightIcon && <span>{rightIcon}</span>}
            </button>
        );
    },
);

Button.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    rounded: PropTypes.bool,
    disabled: PropTypes.bool,
    large: PropTypes.bool,
    medium: PropTypes.bool,
    small: PropTypes.bool,
    onClick: PropTypes.func,
};

export default Button;

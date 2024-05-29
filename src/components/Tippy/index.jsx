import PropTypes from 'prop-types';
import TippyHeadless from '@tippyjs/react/headless';
import { forwardRef } from 'react';

const Tippy = forwardRef(
    (
        {
            children,
            renderComponent,
            ...props
        },
        ref,
    ) => {
        const defaultProps = {
            zIndex: 999,
            interactive: true,
            ...props,
        };

        return (
            <div>
                <TippyHeadless
                    ref={ref}
                    render={(attrs) => (
                        <div tabIndex="-1" {...attrs}>
                            {renderComponent}
                        </div>
                    )}
                    {...defaultProps}
                >
                    {children}
                </TippyHeadless>
            </div>
        );
    },
);

Tippy.propTypes = {
    children: PropTypes.node.isRequired,
    interactive: PropTypes.bool,
    trigger: PropTypes.string,
    hideOnClick: PropTypes.bool,
    offset: PropTypes.array,
    placement: PropTypes.string,
    animation: PropTypes.string,
    delay: PropTypes.array,
    arrow: PropTypes.bool,
    zIndex: PropTypes.bool,
};

export default Tippy;

import PropTypes from 'prop-types';
import TippyHeadless from '@tippyjs/react/headless';

function Tippy({
    children,
    visible = false,
    onClickOutside = () => {},
    interactive = false,
    trigger = 'mouseenter',
    hideOnClick = false,
    offset = [],
    placement = 'auto',
    animation = '',
    delay = [],
    arrow = false,
    zIndex = '9999',
    renderComponent,
}) {
    return (
        <TippyHeadless
            visible={visible}
            onClickOutside={onClickOutside}
            interactive={interactive}
            offset={offset}
            placement={placement}
            animation={animation}
            delay={delay}
            arrow={arrow}
            zIndex={zIndex}
            render={(attrs) => (
                <div tabIndex="-1" {...attrs}>
                    {renderComponent}
                </div>
            )}
        >
            {children}
        </TippyHeadless>
    );
}

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

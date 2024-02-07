import PropTypes from 'prop-types';
import TippyHeadless from '@tippyjs/react/headless';

function Tippy({
    children,
    visible = false,
    interactive = false,
    trigger = '',
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
            interactive={interactive}
            trigger={trigger}
            hideOnClick={hideOnClick}
            offset={offset}
            placement={placement}
            animation={animation}
            delay={delay}
            arrow={arrow}
            zIndex={zIndex}
            render={(attrs) => (
                <div tabIndex="-1" {...attrs}>
                    {renderComponent ? renderComponent : <div></div>}
                </div>
            )}
        >
            {children}
        </TippyHeadless>
    );
}

Tippy.propTypes = {
    children: PropTypes.node.isRequired,
    visible: PropTypes.bool,
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

import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import { RiArrowDownSFill } from 'react-icons/ri';

function TippyBox({
    children,
    offset = [],
    placement = 'auto',
    arrow = false,
    delay = [],
    trigger = 'mouseenter',
    zIndex = '9999',
    content = 'Content',
}) {
    return (
        <Tippy
            offset={offset}
            placement={placement}
            arrow={arrow}
            delay={delay}
            zIndex={zIndex}
            trigger={trigger}
            render={(attrs) => (
                <div tabIndex="-1" {...attrs}>
                    <div className="relative max-w-[350px] bg-bg-tippy rounded-[4px]">
                        <div className="py-[5px] px-[9px]">
                            <p className="text-[11px] leading-[1.3] text-text-tippy">{content}</p>
                        </div>
                    </div>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default TippyBox;

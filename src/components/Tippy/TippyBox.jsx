import { forwardRef } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const TippyBox = forwardRef(({ children, ...props }, ref) => {
    const defaultProps = {
        animation: 'fade',
        arrow: true,
        ...props,
    };

    return <Tippy {...defaultProps}>{children}</Tippy>;
});

export default TippyBox;

import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const TippyBox = forwardRef(
    (
        {
            children,
            offset = [],
            placement = 'auto',
            arrow = false,
            delay = [],
            content = 'Content',
            animation = 'fade',
        },
        ref,
    ) => {
        return (
            <Tippy
                arrow={arrow}
                offset={offset}
                placement={placement}
                delay={delay}
                content={content}
                animation={animation}
            >
                {children}
            </Tippy>
        );
    },
);

export default TippyBox;

import PropTypes from 'prop-types';

function NumberOutline({ children, isFirst = false, isSecond = false, isThird = false }) {
    return (
        <span
            style={{
                WebkitTextStroke: '1px',
                WebkitTextStrokeColor: isFirst
                    ? 'rgb(74, 144, 226)'
                    : isSecond
                    ? 'rgb(80, 227, 194)'
                    : isThird
                    ? 'rgb(227, 80, 80)'
                    : 'rgb(255, 255, 255)',
            }}
            className="text-[32px] leading-[1.25] font-bold"
        >
            {children}
        </span>
    );
}

NumberOutline.propTypes = {
    children: PropTypes.node,
    isFirst: PropTypes.bool,
    isSecond: PropTypes.bool,
    isThird: PropTypes.bool,
};

export default NumberOutline;

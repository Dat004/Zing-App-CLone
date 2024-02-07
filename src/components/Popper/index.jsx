function PopperWrapper({ children, className }) {
    return <div className={`${className || ''} bg-purple-bg-wrapper`}>{children}</div>;
}

export default PopperWrapper;

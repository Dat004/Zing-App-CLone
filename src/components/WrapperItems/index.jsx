function WrapperItems({ children, className }) {
    return <div className={`${className || ''} bg-purple-bg-wrapper w-[450px] h-[300px]`}>{children}</div>;
}

export default WrapperItems;

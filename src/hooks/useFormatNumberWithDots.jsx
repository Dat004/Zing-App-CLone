import { useState, useEffect } from 'react';

const useFormatNumberWithDots = (number) => {
    const [dotsNumber, setDotsNumber] = useState(number);

    useEffect(() => {
        // const formatValue = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        const formatValue = number.toLocaleString('en-US').split(',').join('.');

        setDotsNumber(formatValue);
    }, [number]);

    return { dotsNumber };
};

export default useFormatNumberWithDots;

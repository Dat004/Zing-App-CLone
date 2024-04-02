import { useState, useEffect } from 'react';

const useFormatNumberWithDots = (number) => {
    const [results, setResults] = useState(number);

    useEffect(() => {
        // const formatValue = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        const formatValue = number.toLocaleString('en-US').split(',').join('.');

        setResults(formatValue);
    }, [number]);

    return { results };
};

export default useFormatNumberWithDots;

import { useState, useEffect } from 'react';

const useFormatAbbreviatedNumber = (number) => {
    const [numberAbbreviated, setNumberAbbreviated] = useState(number);

    useEffect(() => {
        const formatValue = Intl.NumberFormat('en-US', {
            notation: 'compact',
            maximumFractionDigits: 1,
        }).format(number);

        setNumberAbbreviated(formatValue);
    }, [number]);

    return { numberAbbreviated };
};

export default useFormatAbbreviatedNumber;

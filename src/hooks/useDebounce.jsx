import { useEffect, useState } from 'react';

const useDebounce = (value, timeDelay = 300) => {
    const [debounce, setDebounce] = useState(value);

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setDebounce(value);
        }, [timeDelay]);

        return () => clearTimeout(timeOut);
    }, [value]);

    return debounce;
};

export default useDebounce;

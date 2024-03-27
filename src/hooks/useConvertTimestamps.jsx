import { useState, useEffect } from 'react';

const useConvertTimestamps = (timestamps) => {
    const [time, setTime] = useState({
        years: '',
        months: '',
        days: '',
    });

    useEffect(() => {
        const time = new Date(timestamps * 1000);

        const days = (time.getDate() < 10 ? '0' + time.getDate() : time.getDate()).toString();
        const months = (time.getMonth() + 1 < 10 ? '0' + (time.getMonth() + 1) : time.getMonth() + 1).toString();
        const years = (time.getFullYear() < 10 ? '0' + time.getFullYear() : time.getFullYear()).toString();

        setTime((prev) => ({ ...prev, days: days, months: months, years: years }));
    }, [timestamps]);

    return { years: time.years, months: time.months, days: time.days };
};

export default useConvertTimestamps;

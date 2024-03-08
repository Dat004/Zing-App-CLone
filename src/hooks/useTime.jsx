import { useState, useEffect } from 'react';

const useTime = (duration) => {
    const [time, setTime] = useState({
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const getMinutes = Math.floor(duration / 60);
        const getSeconds = Math.floor(duration % 60);

        const convertMinutesToString = (getMinutes < 10 ? '0' + getMinutes : getMinutes).toString();
        const convertSecondsToString = (getSeconds < 10 ? '0' + getSeconds : getSeconds).toString();

        setTime({
            minutes: convertMinutesToString,
            seconds: convertSecondsToString,
        });
    }, [duration]);

    return { seconds: time.seconds, minutes: time.minutes };
};

export default useTime;

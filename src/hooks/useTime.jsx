import { useState, useEffect } from 'react';

const useTime = (duration = 0) => {
    const [time, setTime] = useState({
        hours: '',
        minutes: '',
        seconds: '',
        totalMinutes: '',
    });

    useEffect(() => {
        const getSeconds = Math.floor(duration % 60);
        const getTotalMinutes = Math.floor(duration / 60);
        const getHours = Math.floor(duration / 3600);
        const getMinutes = getTotalMinutes >= 60 ? getTotalMinutes % 60 : getTotalMinutes;

        const convertMinutesToString = String(getMinutes < 10 ? '0' + getMinutes : getMinutes);
        const convertTotalMinutes = String(getTotalMinutes < 10 ? '0' + getTotalMinutes : getTotalMinutes);
        const convertSecondsToString = String(getSeconds < 10 ? '0' + getSeconds : getSeconds);
        const convertHoursToString = String(getHours < 10 ? '0' + getHours : getHours);

        setTime({
            hours: convertHoursToString,
            minutes: convertMinutesToString,
            seconds: convertSecondsToString,
            totalMinutes: convertTotalMinutes,
        });
    }, [duration]);

    return { seconds: time.seconds, minutes: time.minutes, hours: time.hours, totalMinutes: time.totalMinutes };
};

export default useTime;

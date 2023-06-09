import { useState, useEffect } from "react";

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

const Timer = ({ duration, onExpire }) => {
  const [time, setTime] = useState(duration);
  useEffect(() => {
    const timerId = setTimeout(() => {
      setTime(time - 1000);
    }, 1000);

    //break Condition
    if (time <= 0) {
      onExpire && onExpire();
      clearTimeout(timerId);
    }

    //Clean Up
    return () => {
      clearTimeout(timerId);
    };
  }, [time, onExpire]);

  const getFormattedTime = (time) => {
    const days = Math.floor(time / DAY);
    const hours = Math.floor((time % DAY) / HOUR);
    const minutes = Math.floor((time % HOUR) / MINUTE);
    const seconds = Math.floor((time % MINUTE) / SECOND);

    return `${days} : ${hours} : ${minutes} : ${seconds}`;
  };
  return getFormattedTime(time);
};

export default Timer;

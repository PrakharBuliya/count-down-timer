import { useState } from "react";
import Timer from ".";

const TimerWrapper = ({ duration, onExpire, beforeRestart }) => {
  const [hasExpired, setExpired] = useState(false);

  const onExpirehelper = () => {
    onExpire && onExpire();
    setExpired(true);
  };

  const handleRestart = () => {
    setExpired(false);
  };

  return !hasExpired ? (
    <Timer duration={duration} onExpire={onExpirehelper} />
  ) : (
    <button onClick={handleRestart}>Restart</button>
  );
};

export default TimerWrapper;

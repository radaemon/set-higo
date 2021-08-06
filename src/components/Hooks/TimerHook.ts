import { useEffect, useState } from 'react';

export default function TimerHook() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((x) => x + 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return time;
}

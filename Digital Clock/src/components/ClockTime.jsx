import { useEffect, useState } from "react";

function ClockTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      This is the current time:{time.toLocaleDateString()} -{" "}
      {time.toLocaleTimeString()}
    </>
  );
}
export default ClockTime;

import React, { useEffect } from "react";

export const useTimer = (number) => {
  const [time, setTime] = React.useState(number);
  

  useEffect(() => {
    if (!!number) {
      let interval;
      setTime(number);
      let num = number
      interval = setInterval(() => {
        num--
        setTime((prev) => prev - 1);
        console.log("num  = "+num);
        if(num===0){ clearInterval(interval)}
      }, 1000);
   
      return () => {
        clearInterval(interval);
      };
    }
  }, [number]);
  return time;
};

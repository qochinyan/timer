import "./Timer.scss";
import { useTimer } from "../hooks/useTimer.js";
import { useState } from "react";
import React from "react";

const Timer = () => {
  const [timing, setTiming] = useState(null);
  const [inputVal, setInputVal] = useState("");
  let time = useTimer(timing);
  
  function isValid() {
    if (inputVal <= 30) {
      setTiming(Number(inputVal));
    } else {
      alert("timing can be 30 seconds maximum");
      setTiming(30);
    }
  }
  return (
    <div className="timer-container">
      <div className="time-shower">{time!==0 && time}</div>
      <div className="input-area">
        <input
          type="text"
          value={inputVal}
          onChange={(e) => {
            let val = e.target.value;
            if ((Number(val) && !val.includes(".")) || val.length === 0)
              setInputVal(e.target.value);
          }}
          onKeyPress={(e) => {
            e.key === "Enter" && isValid();
          }}
        />
        <button
          onClick={() => {
            isValid();
          }}>
          Start
        </button>
      </div>
    </div>
  );
};
export default Timer;

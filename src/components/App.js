import React, { Component, useState, useEffect } from "react";
import '../styles/App.css';

const App = () => {
  const [timer, setTimer] = useState(0);
  // write your code here 

  function handleKeyDown(e){
    let timerValue = e.target.value;
    if(e.keyCode === 13){
      if (!isNaN(timerValue) && parseInt(timerValue, 10) >= 0) {
        setTimer(parseInt(timerValue));
      } else {
        setTimer(0);
      }
  }
  }
  useEffect(() => {
    let intervalId = setInterval(() => {
      if (timer && timer > 0) {
        setTimer(timer - 1);
      }
    }, 1000);

    return () => {
      console.log("return")
      clearInterval(intervalId);
    };
    
  })


  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for<input id="timeCount" onKeyDown={handleKeyDown} /> sec.
        </h1>
      </div>
      <div id="current-time">{timer}</div>
    </div>
  )
}


export default App;

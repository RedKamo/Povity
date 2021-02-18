import React, { useState, useRef } from 'react'



//import { FaPlay, FaPause } from 'react-icons/fa';


import '../assets/styles/Timer.scss';


const Timer =()=> {

  const [ timer, setTimer ] = useState(0)
  const [ isActive, setisActive ] = useState(false)
  const countRef = useRef(null)

  const handlePlay = () => {
    if (isActive === true) {
      clearInterval(countRef.current)
      setisActive(false);
    }
    else if (timer > 1 ){
      setisActive(true);
        countRef.current = setInterval(()=>{
          setTimer((timer)=> timer -1 )
        }, 1000)
    }
  }

  const handleStop = ()=> {
    clearInterval(countRef.current)
    setisActive(false)
    setTimer(25)
  }

  const handleDecrease = ()=>{
    setTimer(timer -1 )
  }

  const handleIncrease = ()=>{
    setTimer(timer + 1)
  }


  return(
    <div className="timer">
      <div className="timer__pomodoro">
        <button onClick={handleDecrease}> - </button>
          {}
          <p>{timer}</p>
          {/* <h1 className="timer__pomodoro__clock">25:00</h1> */}
          <button onClick={handleIncrease}> + </button>
        <div className="timer__pomodoro__icons">
         
        </div>
        <div className="timer__pomodoro__buttons">
          <button onClick={handlePlay}>start</button>
          <button onClick={handleStop}>pause</button>
         {/*  <button>Pomodoro</button>
          <button>Short break</button>
          <button>Long break</button> */}
        </div>
      </div>
      <div className="timer__statics">
        <h2>TODAY STATICS</h2>
      </div>

    </div>
    )
}

export default Timer;
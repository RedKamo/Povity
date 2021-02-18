import React, { useState, useRef, useEffect } from 'react'



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

  useEffect(()=>{
    if(timer < 1  ){
      clearInterval(countRef.current)
      setisActive(false)
    }
  }, [timer])



  const handleStop = ()=> {
    clearInterval(countRef.current)
    setisActive(false)
    setTimer(0)
  }

  const handleDecrease = ()=>{
    setTimer(timer -60 )
  }

  const handleIncrease = ()=>{
    setTimer(timer + 60)
  }

// Para darle formato al timer {00:00}
  const ChangeTimer = ()=>{
    const seconds = `0${timer % 60}`.slice(-2)
    const minutes = `${Math.floor(timer / 60)}`
    const getMinutes = `0${minutes % 60}`.slice(-2)

    return `${getMinutes}: ${seconds}`
  }

  return(
    <div className="timer">
      <div className="timer__pomodoro">
        <div className="timer__pomodoro__clock">
          <button onClick={handleDecrease}> - </button>
          <p className="timer__pomodoro__clock--time">{ChangeTimer()}</p>
          <button onClick={handleIncrease}> + </button>
        </div>
        
          {}
          {/* <h1 className="timer__pomodoro__clock">25:00</h1> */}
        {/* <div className="timer__pomodoro__icons">
         
        </div> */}
        <div className="timer__pomodoro__buttons">
          <button onClick={handlePlay}>{isActive ? "Pause" : "Start" }</button>
          <button onClick={handleStop}> Reset </button>
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
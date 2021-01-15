import React from 'react'

import { FaPlay, FaPause } from 'react-icons/fa';


import '../assets/styles/Timer.scss';


const Timer =()=>{
  return(
    <div className="timer">
      <div className="timer__pomodoro">
        <h1 className="timer__pomodoro__clock">25:00</h1>
        <div className="timer__pomodoro__icons">
          <FaPlay size={40} />
          <FaPause size={40} />
        </div>
        <div className="timer__pomodoro__buttons">
          <button>Pomodoro</button>
          <button>Short break</button>
          <button>Long break</button>
        </div>
      </div>
      <div className="timer__statics">
        <h2>TODAY STATICS</h2>
      </div>

    </div>
    )
}

export default Timer;
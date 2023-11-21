// Timer.js
import React from 'react';
import useTimer from './useTimer';
import './Timer.css';

const Timer = () => {
  const { elapsedTime, isRunning, startTimer, resetTimer } = useTimer();

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <div className="timer-container">
      <div className={`timer ${isRunning ? 'running' : ''}`}>
        <span>{formatTime(elapsedTime)}</span>
      </div>
      <div className="button-container">
        <button onClick={isRunning ? resetTimer : startTimer}>
          {isRunning ? 'Reset Timer' : 'Start Timer'}
        </button>
      </div>
    </div>
  );
};

export default Timer;

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PlayButton from "./PlayButton";
import StopButton from "./StopButton";
import Settings from "./Settings";
import {useContext, useState, useEffect, useRef} from "react";
import SettingsContext from "./SettingsContext";
import { useDispatch, useSelector } from 'react-redux';
import { setOptions, setPomdorro, setSteps } from './redux/TimerSettings';
import React from 'react';

const red = '#f54e4e';
const green = '#4aec8c';

function Timer() {

  const dispatch = useDispatch();
  let {workMinutes,smallBreakMinutes,bigBreakMinutes,rounds,pomodorro}=useSelector(state=>state.TimerSettings)

  const [isPaused, setIsPaused] = useState(true);
  const [mode, setMode] = useState(null); // work/break/null
  const [secondsLeft, setSecondsLeft] = useState(workMinutes * 60);
  let steps=useSelector(state=>state.TimerSettings.steps)

  const secondsLeftRef = useRef(secondsLeft);
  const isPausedRef = useRef(isPaused);
  const modeRef = useRef(mode);
  const workMinutesRef = useRef(workMinutes);
  const bigBreakMinutesRef = useRef(bigBreakMinutes);
  const smallBreakMinutesRef = useRef(smallBreakMinutes);
  let stepsRef = useRef(steps);

  function tick() {
    
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current);
    
    
  }
  
  
  let pomodorroRef=useRef(pomodorro)
  function switchMode() {
    stepsRef.current++
    if(stepsRef.current%2){
      pomodorroRef.current++
      dispatch(setPomdorro())
    }
    pomodorro=pomodorroRef.current
    console.log(pomodorro)
    const nextMode = modeRef.current === 'work' ? 'break' : 'work';
    const nextSeconds = (nextMode === 'work' ? workMinutes : (stepsRef.current % (rounds*2)===0 ? bigBreakMinutes: smallBreakMinutes)) * 60;
    setMode(nextMode);
    modeRef.current = nextMode;
    steps=stepsRef.current
  setSecondsLeft(nextSeconds);
    secondsLeftRef.current = nextSeconds;
  
  }
  useEffect(() => {
 
    if (modeRef.current === null) {
      setMode('work');
      modeRef.current = 'work';
    }

    const interval = setInterval(() => {
      if (isPausedRef.current) {
        return;
      }
      if (secondsLeftRef.current === 0) {
        return switchMode();
      }

      tick();
    }, 10);

    return () => clearInterval(interval);
  }, [stepsRef.current]);

  const totalSeconds = mode === 'work' ? workMinutes * 60 : (stepsRef.current%7===0 ? bigBreakMinutes : smallBreakMinutes) * 60;
  const percentage =  Math.round((secondsLeft / totalSeconds) * 100) 
  

  const minutes = Math.floor(secondsLeft / 60);
  let seconds = secondsLeft % 60;
  if (seconds < 10) seconds = '0' + seconds;

  return (
    <div>
      <h1 onClick={()=>switchMode()} className='skip'>Skip Pomodorro</h1>
      <CircularProgressbar
        value={percentage}
        text={minutes + ':' + seconds}
        styles={buildStyles({
        textColor:'#fff',
        pathColor:mode === 'work' ? red : green,
        tailColor:'rgba(255,255,255,.2)',
      })} />
      <div style={{marginTop:'20px'}}>
        {isPaused
          ? <PlayButton onClick={() => { setIsPaused(false); isPausedRef.current = false; }} />
          : <StopButton onClick={() => { setIsPaused(true); isPausedRef.current = true; }} />}
      </div>
      <div style={{marginTop:'20px'}}>
      </div>
     
    </div>
  );
}

export default Timer;
import logo from './logo.svg';
import './App.css';

import Timer from './Timer';
import PlayButton from './PlayButton';
import SettingOptions from './SettingOptions';
import React, { useState,useContext } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import SettingsModal from './SettingsModal';
import { setOptions } from './redux/TimerSettings';

function App() {
   const {pomodorroPerDay,pomodorro}=useSelector(state=>state.TimerSettings)
   const[options,setOptions]=React.useState(false)
  const handleClose=()=>{
    setOptions(!options)
  }
  
   
  return (
    <div style={{position:"relative"}}>
     
    <div className='header'>
      <h1>Pomodorro Timer</h1>
      <h1 onClick={handleClose} style={{cursor:"pointer",zIndex:"1"}}>Settings</h1>
   </div>
    {options && <SettingsModal options={options}/>}
    <main>
      <Timer />
    </main>
    <div className='footer'>
      <div>
        {`${pomodorro} of ${pomodorroPerDay}`} Pomodorro
        {pomodorro>=pomodorroPerDay && `  -Так держать!`}
      </div>
    
    </div>
    </div>
  );
}

export default App;

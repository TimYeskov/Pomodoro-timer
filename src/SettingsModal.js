import { useRef,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decreaseWorkMin, increaseWorkMin, decreaseSmallBreakMin,decreaseBigBreakMin,increaseBigBreakMin,increaseSmallBreakMin, decreaseRounds,increaseRounds, decreasePomodorro, increasePomodorro } from "./redux/TimerSettings";
const SettingsModal=(props)=>{
    const dispatch=useDispatch()
    let {workMinutes,smallBreakMinutes,bigBreakMinutes,rounds,pomodorroPerDay}=useSelector(state=>state.TimerSettings)
    const modalRef = useRef(null)
    useEffect(() => {
      if (props.options) {
        modalRef.current.classList.add('fadeIn');
      } else {
        modalRef.current.classList.remove('fadeIn');
        modalRef.current.classList.add('fadeOut');
      }
    }, [props.options]);
    return (
       <div  className="setting" ref={modalRef}>
        <div className="setting__up"></div>
       <div className="setting__opt">
        <p>Work time</p>
        <div style={{display:'flex', alignItems:"center"}}>
            <button onClick={()=>dispatch(decreaseWorkMin())}>-</button>
            <div>
                <span>{workMinutes} min</span>
            </div>
            <button onClick={()=>dispatch(increaseWorkMin())}>+</button>
        </div>
       </div>

       <div className="setting__opt">
        <p>Small break</p>
        <div style={{display:'flex', alignItems:"center"}}>
            <button onClick={()=>dispatch(decreaseSmallBreakMin())}>-</button>
            <div>
                <span>{smallBreakMinutes} min</span>
            </div>
            <button onClick={()=>dispatch(()=>increaseSmallBreakMin())}>+</button>
        </div>
       </div>

       <div className="setting__opt">
        <p>Big Break</p>
        <div style={{display:'flex', alignItems:"center"}}>
            <button onClick={()=>dispatch(decreaseBigBreakMin())}>-</button>
            <div>
                <span>{bigBreakMinutes} min</span>
            </div>
            <button onClick={()=>dispatch(increaseBigBreakMin())}>+</button>
        </div>
       </div>

       <div className="setting__opt">
        <p>Pomodorro per round</p>
        <div style={{display:'flex', alignItems:"center"}}>
            <button onClick={()=>dispatch(decreaseRounds())}>-</button>
            <div>
                <span>{rounds}</span>
            </div>
            <button onClick={()=>dispatch(increaseRounds())}>+</button>
        </div>
       </div>

       <div className="setting__opt">
        <p>Pomodorro per day</p>
        <div style={{display:'flex', alignItems:"center"}}>
            <button onClick={()=>dispatch(decreasePomodorro())}>-</button>
            <div>
                <span>{pomodorroPerDay}</span>
            </div>
            <button onClick={()=>dispatch(increasePomodorro())}>+</button>
        </div>
       </div>
       <div className="about">
        <h1 style={{textAlign:'center'}}>About Project</h1>
         <p>1. Pick a task and work on it for 25 minutes without any distractions.</p>
         <p>2. Take a short break, make tea, you can eat a banana.</p>
         <p>3. Every fourth break, rest longer, the brain needs to recover.</p>
       </div>
       </div>
       
    )
}
export  default SettingsModal
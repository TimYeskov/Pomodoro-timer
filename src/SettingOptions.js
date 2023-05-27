import ReactSlider from "react-slider"
import './slider.css'
import { useContext } from "react"
import { useDispatch, useSelector } from "react-redux";
import SettingsContext from "./SettingsContext"
import { setOptions } from "./redux/TimerSettings";

const SettingOptions=(props)=>{
    const dispatch=useDispatch()
    const {workMinutes,smallBreakMinutes}=useSelector(state=>state.TimerSettings)
    return(
        <div style={{textAlign:"left"}}>
            <label>work minutes:</label>
            <ReactSlider
            className="slider"
            thumbClassName="thumb"
            trackClassName="track"
            value={workMinutes}
     
            min={1}
            max={120}/>
            <label>break minutes:</label>
            <ReactSlider
            className="slider green"
            thumbClassName="thumb"
            trackClassName="track"
            value={smallBreakMinutes}

            min={1}
            max={120}/>
            <div style={{textAlign:"center",marginTop:"25px"}} >
                <button onClick={dispatch(setOptions(false))}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
</svg>

</button>
            </div>
        </div>
    )
}
export default SettingOptions
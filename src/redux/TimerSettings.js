import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  steps: 1,
  options:false,
  workMinutes:25,
  smallBreakMinutes:5,
  bigBreakMinutes:20,
  secondsLeft:0,
  rounds:4,
  pomodorro:0,
  pomodorroPerDay:12

}

export const TimerSettings = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    setOptions: (state,action) => {
       state.options=action.payload
    },
    setSecondsLeft:(state,action)=>{
        state.secondsLeft=action.payload
    },
    setSteps(state,action){
        state.steps=action.payload
    },
    setPomdorro(state){
      state.pomodorro++
    },
    increaseWorkMin(state){
      state.workMinutes++
    },
    decreaseWorkMin(state){
      state.workMinutes--
    },
    increaseSmallBreakMin(state){
      state.smallBreakMinutes++
    },
    decreaseSmallBreakMin(state){
      state.smallBreakMinutes--
    },
    increaseBigBreakMin(state){
      state.bigBreakMinutes++
    },
    decreaseBigBreakMin(state){
      state.bigBreakMinutes--
    },
    increaseRounds(state){
      state.rounds++
    },
    decreaseRounds(state){
      state.rounds--
    },
    increasePomodorro(state){
      state.pomodorroPerDay++
    },
    decreasePomodorro(state){
      state.pomodorroPerDay--
    }
  },
})

// Action creators are generated for each case reducer function
export const { setOptions,
   setSecondsLeft, 
   setSteps,
   increaseWorkMin,
   decreaseWorkMin,
   increaseSmallBreakMin,
   decreaseSmallBreakMin,
   increaseBigBreakMin,
   decreaseBigBreakMin,
  increaseRounds,
decreaseRounds,
increasePomodorro,
decreasePomodorro,
setPomdorro} = TimerSettings.actions

export default TimerSettings.reducer
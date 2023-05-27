import { configureStore } from '@reduxjs/toolkit'
import TimerSettings from './TimerSettings'
export const store = configureStore({
  reducer: {TimerSettings},
})

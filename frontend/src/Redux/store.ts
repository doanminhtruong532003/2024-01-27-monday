import { configureStore } from '@reduxjs/toolkit'
import { reducer } from '../Redux/reducer/rootSlice'  

export const store = configureStore({
  reducer
})
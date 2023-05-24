import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './rootReducer/rootReduce'
export const store = configureStore({
  reducer: rootReducer,
})
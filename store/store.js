import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'

import notes from "./NoteSlics"

const combinedReducer = combineReducers({
  notes
})


export const makeStore = ()=> configureStore({
     reducer :   combinedReducer,
  })

  

export const wrapper = createWrapper(makeStore)
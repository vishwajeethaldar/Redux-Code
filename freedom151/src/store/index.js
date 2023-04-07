import { configureStore } from "@reduxjs/toolkit";
import appReducer from './appSlice'
import authSlice from './authSlice'
const store=configureStore({
   reducer:{
    app:appReducer,
    auth:authSlice
   }
})

export default store
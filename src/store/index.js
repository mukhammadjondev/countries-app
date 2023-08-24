import { configureStore } from "@reduxjs/toolkit";
import CountryReducer from '../slice/country'
import ModeReducer from '../slice/mode'

export default configureStore({
  reducer: {
    country: CountryReducer,
    mode: ModeReducer
  },
  devTools: process.env.NODE_ENV !== 'production'
})
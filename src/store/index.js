import { configureStore } from "@reduxjs/toolkit";
import CountryReducer from '../slice/country'

export default configureStore({
  reducer: {
    country: CountryReducer
  },
  devTools: process.env.NODE_ENV !== 'production'
})
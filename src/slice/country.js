import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  isLoading: false,
  countries: [],
  countryDetail: null,
  error: null
}

export const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {
    getCountryStart: state => {
      state.isLoading = true
    },
    getCountrySuccess: (state, action) => {
      state.isLoading = false
      state.countries = action.payload
    },
    getCountryDetailSuccess: (state, action) => {
      state.isLoading = false
      state.countryDetail = action.payload
    },
    getCountryFailure: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    }
  }
})

export const {getCountryStart, getCountrySuccess, getCountryDetailSuccess, getCountryFailure} = countrySlice.actions
export default countrySlice.reducer
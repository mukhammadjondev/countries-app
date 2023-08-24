import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  icon: 'fa-moon',
  mode: 'Dark'
}

export const modeSlice = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    changeModeDark: state => {
      state.icon = 'fa-sun'
      state.mode = 'Light'
    },
    changeModeLight: state => {
      state.icon = 'fa-moon'
      state.mode = 'Dark'
    }
  }
})

export const {changeModeDark, changeModeLight} = modeSlice.actions
export default modeSlice.reducer
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
}

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    saveUserInfo: (state, action) => {
      state.user = action.payload
    },
  }})

export const { saveUserInfo } = AuthSlice.actions

export default AuthSlice.reducer

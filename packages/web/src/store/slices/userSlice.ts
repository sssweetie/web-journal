import { createSlice } from '@reduxjs/toolkit';
//userSlice для логинизации пользователя 

const initialState = {
  isLogged: null,
  id: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser(state, action) {
      state.id = action.payload.id;
      state.isLogged = action.payload.isLogged;
    },
    logoutUser(state) {
      state.id = null;
      state.isLogged = null;
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;

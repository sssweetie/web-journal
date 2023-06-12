import { createSlice } from '@reduxjs/toolkit';

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
    logoutUser(state, action) {
      state.id = null;
      state.isLogged = null;
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: null,
  labs: null,
};

const modalLabSlice = createSlice({
  name: 'modalLab',
  initialState,
  reducers: {
    getState(state, action) {
      state.id = action.payload.id;
      state.labs = action.payload.labs;
    },
  },
});

export const { getState } = modalLabSlice.actions;

export default modalLabSlice.reducer;

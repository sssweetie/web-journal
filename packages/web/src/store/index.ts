import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import modalLabReducer from './slices/userSlice';
export const store = configureStore({
  reducer: {
    user: userReducer,
    modalLab: modalLabReducer,
  },
});

// Типизация методов Redux toolkit на TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

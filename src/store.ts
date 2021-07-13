import { configureStore } from '@reduxjs/toolkit';
import persistantStateSlice from './oh-items-module/slice';

export const store = configureStore({
  reducer: {
    persistent: persistantStateSlice,
  },
})

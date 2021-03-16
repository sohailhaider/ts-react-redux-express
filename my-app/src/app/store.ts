import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import itunesSlice from '../features/itunes/itunesSlice';

export const store = configureStore({
  reducer: {
    itunes: itunesSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

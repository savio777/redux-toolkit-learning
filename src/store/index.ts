import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';

import Stock from './modules/Stock';

const store = configureStore({reducer: {stock: Stock}});

export type RootState = ReturnType<typeof store.getState>;

export default store;

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
export const useAppDispatch = () => useDispatch<AppDispatch>();

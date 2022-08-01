import {configureStore} from '@reduxjs/toolkit';

import Stock from './modules/Stock';

const store = configureStore({reducer: {stock: Stock}});

export type RootState = ReturnType<typeof store.getState>;

export default store;

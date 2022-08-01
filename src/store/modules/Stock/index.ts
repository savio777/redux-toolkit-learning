import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AppDispatch, AppThunk} from '../..';

const stock = createSlice({
  name: 'stock',
  initialState: {
    counter: 0,
  },
  reducers: {
    increment(state) {
      state.counter += 1;
    },
    decrement(state) {
      state.counter -= 1;
    },
    incrementCounter(state, action: PayloadAction<{counter: number}>) {
      state.counter += action.payload.counter;
    },
    decrementCounter(state, action: PayloadAction<{counter: number}>) {
      state.counter -= action.payload.counter;
    },
  },
});

export const {decrement, increment, incrementCounter, decrementCounter} =
  stock.actions;

export default stock.reducer;

// action async

function sleep() {
  return new Promise(resolve => setTimeout(resolve, 3000));
}

export function asyncDecrement(): AppThunk {
  return async function (dispatch: AppDispatch) {
    await sleep();
    dispatch(decrement());
  };
}

export function asyncIncrement(): AppThunk {
  return async function (dispatch: AppDispatch) {
    await sleep();
    dispatch(increment());
  };
}

export function asyncIncrementCounter(
  action: PayloadAction<{counter: number}>,
): AppThunk {
  return async function (dispatch: AppDispatch) {
    await sleep();
    dispatch(incrementCounter({counter: action.payload.counter}));
  };
}

export function asyncDecrementCounter(
  action: PayloadAction<{counter: number}>,
): AppThunk {
  return async function (dispatch: AppDispatch) {
    await sleep();
    dispatch(decrementCounter({counter: action.payload.counter}));
  };
}

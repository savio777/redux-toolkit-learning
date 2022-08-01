import {createSlice} from '@reduxjs/toolkit';
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
  },
});

export const {decrement, increment} = stock.actions;

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

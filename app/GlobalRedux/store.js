"use client";

import { configureStore, createSlice } from '@reduxjs/toolkit';
import counterReducer from './slicers/ATMslicer';
import counterSlice from "./slicers/ATMslicer"
import CatsReducer from "./slicers/catSlicer"

/* const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    withdraw: (state) => {
        state.value = 0;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});
 */

/* export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
}); */

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    cat: CatsReducer
  },
});



/* export const { withdraw, incrementByAmount } = counterSlice.actions; */


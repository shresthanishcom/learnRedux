import { createSlice } from "@reduxjs/toolkit";
const initialState = { count: 0 };

//actions / reducer /states all in one place createSlice j
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementNumber: (state) => {
      state.count = state.count + 1;
    },
    decrementNumber: (state) => {
      state.count = state.count - 1;
    },
  },
});

export const { incrementNumber, decrementNumber } = counterSlice.actions;
export default counterSlice.reducer;

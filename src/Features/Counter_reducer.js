import { createSlice } from "@reduxjs/toolkit";
const initialState = { count: 0 };

//actions / reducer /states all in one place createSlice j
export const counterSlice = createSlice({
  name: "counterReducer",
  initialState,
  reducers: {
    incrementNumber: (state) => {
      state.count = state.count + 1;
    },
    decrementNumber: (state) => {
      state.count = state.count - 1;
    },
    increaseNumber: (state, action) => {
      console.log("payload is", action.payload);
      state.count = state.count + parseInt(action.payload);
    },
  },
});

export const { incrementNumber, decrementNumber, increaseNumber } =
  counterSlice.actions;
export default counterSlice.reducer;

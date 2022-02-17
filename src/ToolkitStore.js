import { configureStore } from "@reduxjs/toolkit";

import CounterReducer from "./Features/Counter_reducer";
import rootReducer from "./Reducers/reducer_index";

export default configureStore({
  reducer: {
    counter: CounterReducer,
  },
});

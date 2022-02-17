import { configureStore } from "@reduxjs/toolkit";

import CounterReducer from "./Features/Counter_reducer";
import rootReducer from "./Reducers/reducer_index";
import { incdecReducer } from "./Reducers/incdec_reducer";
import { multiplierReducer } from "./Reducers/multiplier_reducer";
import { addUserReducer } from "./Reducers/addUser_reducer";

export default configureStore({
  reducer: {
    counterReducer: CounterReducer,
    incdecReducer,
    multiplierReducer,
    addUserReducer,
  },
});

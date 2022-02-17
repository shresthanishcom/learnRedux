import { combineReducers } from "redux";
import { incdecReducer } from "./incdec_reducer";
import { multiplierReducer } from "./multiplier_reducer";
import { addUserReducer } from "./addUser_reducer";

const rootReducer = combineReducers({
  incdecReducer,
  multiplierReducer,
  addUserReducer,
});
export default rootReducer;

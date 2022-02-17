import { createStore } from "redux";
import rootReducer from "./Reducers/reducer_index";

const Store = createStore(rootReducer);
export default Store;

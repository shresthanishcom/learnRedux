import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

//importing actions for redux
import {
  incrementNumber,
  decrementNumber,
  increaseNumber,
} from "../Features/Counter_reducer";

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counterReducer.count);
  let [state, setState] = useState(1);

  const inputValue = (e) => {
    setState({ ...state, value: parseInt(e.target.value) });
  };

  const dispatcher = (e) => {
    if (e.target.name === "increment") {
      dispatch(incrementNumber());
    } else if (e.target.name === "decrement") {
      dispatch(decrementNumber());
    } else if (e.target.name === "increasenumber") {
      dispatch(increaseNumber(state));
    }
  };
  return (
    <div className="App">
      <h1>{count}</h1>
      <button
        type="button"
        name="increment"
        className="btn btn-success m-2"
        onClick={(e) => dispatcher(e)}
      >
        +
      </button>
      <button
        type="button"
        name="decrement"
        className="btn btn-danger m-2"
        onClick={(e) => dispatcher(e)}
      >
        -
      </button>
      <button
        type="button"
        name="increasenumber"
        className="btn btn-danger m-2"
        onClick={(e) => dispatcher(e)}
      >
        increase number by
      </button>
      <input
        type="text"
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
    </div>
  );
}

export default Counter;

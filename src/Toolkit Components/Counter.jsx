import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import { incrementNumber, decrementNumber } from "../Features/Counter_reducer";

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  let [state, setState] = useState({ value: 0 });

  const inputValue = (e) => {
    setState({ ...state, value: parseInt(e.target.value) });
  };

  const dispatcher = (e) => {
    dispatch(incrementNumber());
    if (e.target.name === "increment") {
    } else if (e.target.name === "decrement") {
      dispatch(decrementNumber());
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
    </div>
  );
}

export default Counter;

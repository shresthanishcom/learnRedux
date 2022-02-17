import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { incrementAction, decrementAction } from "../Actions/action_index";
import { useState } from "react";

function Counter() {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.incdecReducer);
  let [state, setState] = useState({ value: 0 });

  const inputValue = (e) => {
    setState({ ...state, value: parseInt(e.target.value) });
  };

  function handleInput() {
    if (state.value === 0) {
      setState({ ...state, value: "" });
    }
  }

  const dispatcher = (e) => {
    if (state.value !== "") {
      if (e.target.name === "increment") {
        dispatch(incrementAction(state.value));
      } else if (e.target.name === "decrement") {
        dispatch(decrementAction(state.value));
      }
    }
  };
  return (
    <div className="App">
      <h1>{value}</h1>
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
      input How much:
      <input
        value={state.value}
        onClick={handleInput}
        type="number"
        onChange={inputValue}
      />
    </div>
  );
}

export default Counter;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { multiplyAction } from "../Actions/action_index";

const Multiplier = () => {
  const dispatch = useDispatch();
  const multipliedValue = useSelector((state) => state.multiplierReducer);
  return (
    <div>
      <h3>Which number to multiply:</h3>

      <input />
      <button onClick={() => dispatch(multiplyAction())}>=</button>
    </div>
  );
};

export default Multiplier;

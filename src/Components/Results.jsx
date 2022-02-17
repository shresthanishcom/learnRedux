import React from "react";
import { useSelector } from "react-redux";

const Results = () => {
  const value = useSelector((state) => state.incdecReducer);
  const admins = useSelector((state) => state.addUserReducer);
  return (
    <div>
      <h2>Result from different component :{value}</h2>
      <h2>Result from different component admins are:{admins.users.length}</h2>
      <h3>Anish Shrestha</h3>
    </div>
  );
};

export default Results;

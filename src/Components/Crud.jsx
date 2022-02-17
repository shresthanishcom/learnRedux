import React from "react";
import AddUser from "./CRUD/AddUser";
import DisplayAll from "./CRUD/DisplayAll";
import { Link } from "react-router-dom";
import Results from "./Results";

export default function Crud() {
  return (
    <div>
      <AddUser />
      <hr />
      <Results />
      <hr />

      <DisplayAll />
    </div>
  );
}

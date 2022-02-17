import React from "react";
import "../App.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addUserAction } from "../Actions/action_index";

function Admins() {
  let [State, setState] = useState({});

  const dispatch = useDispatch();
  const userState = useSelector((state) => state.addUserReducer);
  const getAdmins = () => {
    return userState.users.map((user) => {
      return (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.age}</td>
        </tr>
      );
    });
  };
  const handleInput = (e) => {
    const value = e.target.value;
    switch (e.target.name) {
      case "id":
        setState({ ...State, id: value });
        break;
      case "name":
        setState({ ...State, name: value });
        break;
      case "age":
        setState({ ...State, age: value });
        break;
      default:
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUserAction(State));
  };

  return (
    <div>
      {/* for input of new data */}
      <form onSubmit={handleSubmit}>
        <h1>Add new admin</h1>
        Id:
        <input name="id" onChange={(e) => handleInput(e)} value={State.id} />
        Name:
        <input value={State.name} name="name" onChange={handleInput} />
        Age:
        <input value={State.age} name="age" onChange={handleInput} />
        <button type="submit">Submit</button>
      </form>
      {/* to show data */}
      <table className="mytable">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>{getAdmins()}</tbody>
      </table>
    </div>
  );
}

export default Admins;

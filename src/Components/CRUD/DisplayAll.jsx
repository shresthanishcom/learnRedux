import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUserAction, removeUserAction } from "../../Actions/action_index";

const Displayall = () => {
  const state = useSelector((state) => state.addUserReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getData() {
      const { data } = await axios.get("http://127.0.0.1:5000/crud/");
      console.log("data from server ", data);
      dispatch(addUserAction(data));
    }
    getData();
  }, []);

  const handleDelete = (e, id) => {
    axios
      .delete(`http://127.0.0.1:5000/crud/remove/${id}`)
      .then((data) => {
        dispatch(removeUserAction(id));
      })
      .catch((err) => console.log(err));
  };
  const getUsers = () => {
    console.log(state);
    return state.users.map((user) => {
      return (
        <div key={user._id}>
          <h2>{user.name}</h2>
          <button
            className="btn btn-danger "
            onClick={(e) => handleDelete(e, user._id)}
          >
            Delete
          </button>

          <Link to={`/crud/edit/${user._id}`}>
            <button className="btn btn-warning">edit</button>
          </Link>
        </div>
      );
    });
  };

  return (
    <React.Fragment>
      <h1>Display all Names:</h1>
      {getUsers()}
    </React.Fragment>
  );
};

export default Displayall;

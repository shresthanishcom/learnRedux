import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addMoreUserAction } from "../../Actions/action_index";

const AddUser = () => {
  let [userDetail, setUserDetail] = useState({ detail: {} });
  const dispatch = useDispatch();

  const handleName = (e) => {
    setUserDetail({ detail: { name: e.target.value } });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userDetail.name !== "") {
      await axios
        .post("http://127.0.0.1:5000/crud/new/", userDetail.detail)
        .then((res) => {
          setUserDetail({ ...userDetail, name: "" });
          dispatch(addMoreUserAction(res.data));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        Name:
        <input
          type="text"
          value={userDetail.name}
          onChange={(e) => handleName(e)}
        />
        <button>Add</button>
      </form>
    </React.Fragment>
  );
};

export default AddUser;

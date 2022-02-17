import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Edituser(props) {
  const { id } = useParams();
  const [state, setState] = useState({ name: "" });
  useEffect(async () => {
    await axios
      .get(`http://127.0.0.1:5000/crud/${id}`)
      .then((res) => setState(res.data))
      .catch((err) => console.log("error while getting user", err));
  }, []);

  const handleEdit = (e, id) => {
    axios
      .put(`http://127.0.0.1:5000/crud/edit/${id}`, state)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    if (e.target.name === "name") {
      setState({ ...state, name: e.target.value });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    handleEdit();
  };
  return (
    <div>
      Edit id: {id}
      <hr />
      <form onSubmit={handleSubmit}>
        Name:
        <input name="name" value={state.name} onChange={handleChange} />
        <button type="submit"> Edit</button>
      </form>
    </div>
  );
}

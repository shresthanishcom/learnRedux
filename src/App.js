import "./App.css";

import Navbar from "./Components/Navbar";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import AddUser from "./Components/CRUD/AddUser";
import Displayall from "./Components/CRUD/DisplayAll";
import Crud from "./Components/Crud";
import Edituser from "./Components/CRUD/EditUser";
import Accordian from "./Components/Accordian";
import Counter from "./Toolkit Components/Counter";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/redux/" element={<Home />} />
        <Route path="/crud/" element={<Crud />} />
        <Route path="/crud/edit/:id" element={<Edituser />} />
        <Route path="/accordian" element={<Accordian />} />
        <Route path="/toolkit" element={<Counter />} />
        {/* <Route path="/adduser/" element={<AddUser />} />
        <Route path="/displayall/" element={<Displayall />} /> */}
      </Routes>
    </React.Fragment>
  );
}

export default App;

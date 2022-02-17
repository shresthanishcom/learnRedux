import React from "react";
import Admins from "./Admins";
import Counter from "./Counter";
import Multiplier from "./Multiplier";
import Results from "./Results";
const Home = () => {
  return (
    <div>
      <div className="container">
        <Counter />
        <div className="row ">
          <hr />
          <div className="col-sm-6">
            <Results />
          </div>
          <hr />
          <div className="col-sm-6">
            <Multiplier />
          </div>
        </div>
        <hr />
        <Admins />
      </div>
    </div>
  );
};

export default Home;

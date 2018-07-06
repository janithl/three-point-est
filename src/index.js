import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Navbar from "./common/Navbar";
import EstimationRow from "./common/EstimationRow";
ReactDOM.render(
  <React.Fragment>
    <Navbar title="Three Point Estimation App" />
    <div className="container">
      <form>
        <EstimationRow />
        <EstimationRow />
        <EstimationRow />
        <EstimationRow />
      </form>
    </div>
  </React.Fragment>,
  document.getElementById("root")
);

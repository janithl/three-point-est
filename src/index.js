import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Navbar from "./common/Navbar";
import AppContainer from "./common/AppContainer";

ReactDOM.render(
  <React.Fragment>
    <Navbar title="Three Point Estimation App" />
    <AppContainer />
  </React.Fragment>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import "./styles.css";
import Navbar from "./common/Navbar";
import AppContainer from "./common/AppContainer";
import { store, persistor } from "./store";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <React.Fragment>
        <Navbar title="Three Point Estimation App" />
        <AppContainer />
      </React.Fragment>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

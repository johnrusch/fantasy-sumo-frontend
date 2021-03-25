import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Store, { StoreProvider } from "./store/index";
import actionCable from 'actioncable';

const store = new Store();

const CableApp = {};

CableApp.cable = actionCable.createConsumer('ws://fantasy-sumo-backend.herokuapp.com/api/v1/cable')

ReactDOM.render(
  <StoreProvider store={store}>
    <Router>
      <App cableApp={CableApp} />
    </Router>
  </StoreProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Router } from "react-router";
import history from "./history";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById("root")
);

serviceWorker.register();

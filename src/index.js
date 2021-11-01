import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import { StateProvider } from "./StateProvider";
// import reportWebVitals from './reportWebVitals';
import reducer, { initialState } from "./reducer";

require("dotenv").config();

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./Components/App";
import "./Styles/style.css";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.querySelector("#root")
);

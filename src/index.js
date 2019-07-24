import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";

ReactDOM.render(
  <BrowserRouter>
    <App title="Testing React Applications" />
  </BrowserRouter>,
  document.getElementById("root")
);

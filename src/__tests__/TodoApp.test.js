import React from "react";
import ReactDOM from "react-dom";
import TodoApp from "../components/TodoApp";

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<TodoApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});

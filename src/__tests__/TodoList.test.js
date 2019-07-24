import React from "react";
import ReactDOM from "react-dom";
import TodoList from "../components/TodoList";

const fakeTodos = [
  {
    id: 1,
    title: "Fake todo",
    complete: false
  }
];

test("should render empty", () => {
  const div = document.createElement("div");
  ReactDOM.render(<TodoList todos={[]} />, div);
  expect(div.textContent).toMatch(/NO ITEMS/i);
});

test("should render with items", () => {
  const div = document.createElement("div");
  ReactDOM.render(<TodoList todos={fakeTodos} />, div);
  expect(div.textContent).toMatch(/FAKE TODO/i);
});

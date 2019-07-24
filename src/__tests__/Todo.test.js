import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import { render, cleanup, fireEvent } from "@testing-library/react";
import Todo from "../components/Todo";

afterEach(cleanup);

const fakeTodo = {
  id: 1,
  title: "fake todo",
  complete: true
};

// afterEach(cleanup);

describe("<Todo />", () => {
  test("renders todo", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Todo todo={fakeTodo} />, div);
    expect(div).toMatchSnapshot();
  });
  test("changes class when complete", () => {
    const component = renderer.create(<Todo todo={fakeTodo} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
  // test("renders", () => {
  // const { container, getByText } = render(<Todo todo={fakeTodo} />);
  // console.log(getByText(/edit/i));
  // });
});

const fakeTodo2 = {
  id: "1",
  title: "wrong typed todo",
  complete: "false"
};

console.error = jest.fn();

describe("<Todo /> with react-testing-library", () => {
  test("todo should update", () => {
    const { debug } = render(<Todo todo={fakeTodo2} />);
    // debug();
    expect(console.error).toBeCalled();
  });
});

import React from "react";
import {
  render,
  cleanup,
  fireEvent,
  wait,
  waitForElement
} from "@testing-library/react";
import axios from "axios";

import Hooks, { Counter } from "../components/Hooks";

afterEach(cleanup);

const counter = 0;

describe("<Counter />", () => {
  test("counter should render", () => {
    const { debug, getByTestId } = render(<Counter counter={counter} />);
    debug();
    expect(getByTestId("counter").textContent).toBe(String(counter));
  });
});

describe("<Hooks />", () => {
  test("counter works", () => {
    const { getByTestId } = render(<Hooks />);
    fireEvent.click(getByTestId("increment"));
    expect(getByTestId("counter").textContent).toBe("1");
    fireEvent.click(getByTestId("decrement"));
    fireEvent.click(getByTestId("decrement"));
    expect(getByTestId("counter").textContent).toBe("-1");
  });
});

test.only("should fetch data", async () => {
  const { debug, getAllByTestId } = render(<Hooks />);
  // await waitForElement(() => getAllByTestId("list"));
  debug();
});

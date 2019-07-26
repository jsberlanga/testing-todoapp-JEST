// __tests__/fetch.test.js
import React from "react";
import {
  render,
  fireEvent,
  cleanup,
  wait,
  waitForElement
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import axios from "axios";
import Hooks from "../components/Hooks";
import { act } from "react-dom/test-utils";

afterEach(cleanup);

jest.mock("axios");

console.error = jest.fn();

test("loads and displays greeting", async () => {
  axios.get.mockResolvedValueOnce({
    data: { hits: [{ objectID: 1, title: "hello there" }] }
  });
  const { debug, getByTestId } = render(<Hooks />);
  await waitForElement(() => getByTestId("list"));

  // expect(console.error).toBeCalled();
  expect(axios.get).toHaveBeenCalledTimes(1);
  expect(getByTestId("list")).toHaveTextContent("hello there");
});

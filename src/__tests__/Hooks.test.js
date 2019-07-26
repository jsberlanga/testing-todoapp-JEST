import React from "react";
import {
  render,
  cleanup,
  fireEvent,
  waitForElement,
  wait,
  act
} from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import Hooks, { Counter } from "../components/Hooks";

afterEach(cleanup);

describe("<Counter />", () => {
  test("counter should render", () => {
    const counter = 0;
    const { debug, getByTestId } = render(<Counter counter={counter} />);
    // debug();
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

test("counter with hooks library", () => {
  const { result } = renderHook(() => Counter({ counter: 99 }));
  expect(result.current.props.children.props.children).toBe(99);
});

console.error = jest.fn();

const hits = [
  { title: "title1", objectID: "1" },
  { title: "title2", objectID: "2" }
];

const length = hits.reduce((acc, curr) => acc.title.length + curr.title.length);

test("fetch hooks library", async () => {
  const mock = new MockAdapter(axios);

  mock.onGet("/http://hn.algolia.com/api/v1/search?query=react").reply(200, {
    hits
  });

  const { debug, getByTestId } = render(<Hooks />);
  await waitForElement(() => getByTestId("list"));

  // Warning: An update to Hooks inside
  // a test was not wrapped in act(...)
  // When testing, code that causes React state updates
  //should be wrapped into act(...):
  // act(() => {
  /* fire events that update state
   */
  //});
  /* assert on the output */
  // This ensures that you're testing the behavior the user
  // would see in the browser.
  // Learn more at https://fb.me/react-wrap-tests-with-act
  // in Hooks (at Hooks2.test.js:23)
  // debug();

  // ***to investigate further
  expect(console.error).toBeCalled();

  const text = getByTestId("list").textContent;
  expect(text.length).toBe(length);

  const expectedText = expect.stringMatching(
    `${hits.reduce((acc, curr) => acc.title + curr.title)}`
  );
  expect(text).toEqual(expectedText);

  // console.log(expectedText);
});

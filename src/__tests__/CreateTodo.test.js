import React from "react";
import {
  render,
  cleanup,
  fireEvent,
  waitForElementToBeRemoved
} from "@testing-library/react";
import CreateTodo from "../components/CreateTodo";

afterEach(cleanup);

const onSpyCreate = jest.fn();

describe("<CreateTodo />", () => {
  test("creates a todo if data", async () => {
    const { debug, getByTestId, getByLabelText, getByText } = render(
      <CreateTodo onCreate={onSpyCreate} />
    );

    const input = getByLabelText("title-input");
    expect(input.tagName).toBe("INPUT");

    expect(input.value).toBeFalsy();

    fireEvent.change(input, { target: { value: "qwertys" } });
    expect(input.value).toBe("qwertys");

    const button = getByTestId("submit-button");
    // debug();
    fireEvent.click(button);
    expect(onSpyCreate).toHaveBeenCalledTimes(0);

    await waitForElementToBeRemoved(() => getByText(/LOADING.../i));
    // debug();
    expect(onSpyCreate).toHaveBeenCalledTimes(1);
    expect(input.value).toBe("");
  });

  test("should not submit if empty", () => {
    const { debug, getByTestId, getByLabelText } = render(
      <CreateTodo onCreate={onSpyCreate} />
    );

    const input = getByLabelText("title-input");
    const submit = getByTestId("submit-button");

    fireEvent.change(input, { target: { value: "" } });
    fireEvent.click(submit);
    expect(getByTestId("error")).toBeDefined();
    // debug();
  });
});

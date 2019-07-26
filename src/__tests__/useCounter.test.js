import React from "react";
import { renderHook, act } from "@testing-library/react-hooks";
import useCounter from "../components/useCounter";

describe("useCounter hook", () => {
  test("should have initial value", () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);
  });

  test("should act for changes", () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);

    act(() => {
      result.current.decrement();
    });
    expect(result.current.count).toBe(0);
  });
});

import React from "react";
import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";
import App from "../components/App";

// import { toHaveClass } from "@testing-library/jest-dom";
// expect.extend({ toHaveClass });

afterEach(cleanup);

describe("<App />", () => {
  test("should have class", () => {
    const { container } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    // debug();
    // expect(container.firstChild.classList.contains("app")).toBe(true);
    expect(container.firstChild).toHaveClass("app");
  });
});

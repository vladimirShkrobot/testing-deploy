import { render, screen } from "@testing-library/react";
import Counter from "./Counter";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";
import { renderTestApp } from "../../tests/helpers/renderTestApp";

describe("Counter test", () => {
  test("Test router", () => {
    const { getByTestId } = renderTestApp(<Counter />, {
      counter: { value: 10 },
    });
    const incrementBtn = getByTestId("increment-btn");
    const decrementBtn = getByTestId("decrement-btn");
    expect(getByTestId("value-title")).toHaveTextContent("10");
    act(() => {
      userEvent.click(incrementBtn);
    });
    expect(getByTestId("value-title")).toHaveTextContent("11");
    act(() => {
      userEvent.click(decrementBtn);
    });
    expect(getByTestId("value-title")).toHaveTextContent("10");
  });
});

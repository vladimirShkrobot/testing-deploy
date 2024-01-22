import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Events from "./Events";
import userEvent from "@testing-library/user-event";

describe("TEST APP", () => {
  test("renders learn react link", () => {
    render(<Events />);
    const helloWorldElem = screen.getByText(/hello world/i);
    const btn = screen.getByRole("button");
    const input = screen.getByPlaceholderText(/input value/i);
    expect(helloWorldElem).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(input).toMatchSnapshot();
  });

  test("NULL", () => {
    render(<Events />);
    const helloWorldElem = screen.queryByText(/hello2/i);
    expect(helloWorldElem).toBeNull();
  });

  test("STYLE", async () => {
    render(<Events />);
    const dataElem = await screen.findByText(/data/i);
    expect(dataElem).toBeInTheDocument();
    expect(dataElem).toHaveStyle({ color: 'red' });
  });

  test("CLICK EVENT", async () => {
    render(<Events />);
    const btn = screen.getByTestId('toggle-btn');
    expect(screen.queryByTestId('toggle-elem')).toBeNull();
    fireEvent.click(btn);
    expect(screen.queryByTestId('toggle-elem')).toBeInTheDocument();
    fireEvent.click(btn);
    expect(screen.queryByTestId('toggle-elem')).toBeNull();
  });

  test("INPUT EVENT", async () => {
    render(<Events />);
    const input = screen.getByPlaceholderText(/input value/i);
    expect(screen.queryByTestId('value-elem')).toContainHTML('');
    // искуственное событие
    fireEvent.input(input, {
      target: { value: '1234' }
    });
    // имитация юзера
    // userEvent.type(input, '1234');
    expect(screen.queryByTestId('value-elem')).toContainHTML('1234');
  });
});

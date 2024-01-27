import { act, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderTestApp } from "./tests/helpers/renderTestApp";

describe("TEST APP", () => {
  test("router tests", async () => {
    renderTestApp();
    const mainLink = screen.getByTestId("main-link");
    const aboutLink = screen.getByTestId("about-link");
    act(() => {
      userEvent.click(aboutLink);
    });
    expect(screen.getByTestId("about-page")).toBeInTheDocument();
    act(() => {
      userEvent.click(mainLink);
    });
    expect(screen.getByTestId("main-page")).toBeInTheDocument();
  });

  test("error page test", async () => {
    renderTestApp("/qwqwqqww");
    expect(screen.getByTestId("not-found-page")).toBeInTheDocument();
  });
});

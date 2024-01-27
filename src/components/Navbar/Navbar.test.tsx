import { act, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderTestApp } from "../../tests/helpers/renderTestApp";

describe("TEST NAVBAR", () => {
  test("about link", async () => {
    renderTestApp();
    const aboutLink = screen.getByTestId("about-link");
    act(() => {
      userEvent.click(aboutLink);
    });
    expect(screen.getByTestId("about-page")).toBeInTheDocument();
  });

  test("main link", async () => {
    renderTestApp();
    const mainLink = screen.getByTestId("main-link");
    act(() => {
      userEvent.click(mainLink);
    });
    expect(screen.getByTestId("main-page")).toBeInTheDocument();
  });

  test("users link", async () => {
    renderTestApp();
    const usersLink = screen.getByTestId("users-link");
    act(() => {
      userEvent.click(usersLink);
    });
    expect(screen.getByTestId("users-page")).toBeInTheDocument();
  });
});

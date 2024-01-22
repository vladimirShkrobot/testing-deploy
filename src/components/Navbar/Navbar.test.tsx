import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import { renderTestApp } from "../../tests/helpers/renderTestApp";

describe("TEST NAVBAR", () => {
  test("test about link", async () => {
    renderTestApp();
    const aboutLink = screen.getByTestId("about-link");
    act(() => {
      userEvent.click(aboutLink);
    });
    expect(screen.getByTestId("about-page")).toBeInTheDocument();
  });

  test("test main link", async () => {
    renderTestApp();
    const mainLink = screen.getByTestId("main-link");
    act(() => {
      userEvent.click(mainLink);
    });
    expect(screen.getByTestId("main-page")).toBeInTheDocument();
  });

  test("test users link", async () => {
    renderTestApp();
    const usersLink = screen.getByTestId("users-link");
    act(() => {
      userEvent.click(usersLink);
    });
    expect(screen.getByTestId("users-page")).toBeInTheDocument();
  });
});

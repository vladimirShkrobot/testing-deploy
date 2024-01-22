import { render } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { routes } from "../../router";

export const renderWithRouter = (initialEntries: string[] = ["/"]) => {
  const router = createMemoryRouter(routes, {
    initialEntries,
  });

  render(<RouterProvider router={router} />);
};

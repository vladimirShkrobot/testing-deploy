import { render, RenderResult } from "@testing-library/react";
import { ReactElement } from "react";
import { Provider } from "react-redux";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { routes } from "../../router";
import { createReduxStore, RootState } from "../../store/store";

export function renderTestApp(
  Component?: ReactElement,
  initialState?: Partial<RootState>
): RenderResult;
export function renderTestApp(
  route?: string,
  initialState?: Partial<RootState>
): RenderResult;
export function renderTestApp(
  value?: ReactElement | string,
  initialState?: Partial<RootState>
) {
  const router = createMemoryRouter(
    typeof value === "string" || !value
      ? routes
      : routes.concat({ path: "/testingRoute", element: value }),
    {
      initialEntries: typeof value === "string" ? [value] : ["/"],
    }
  );

  const store = createReduxStore(initialState);

  return render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

import { screen } from "@testing-library/react";
import axios from "axios";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import { IUser } from "../../models/IUser";
import { renderTestApp } from "../../tests/helpers/renderTestApp";

jest.mock("axios");

interface MockUsersResponse {
  data: IUser[];
}

describe("TEST APP", () => {
  let response: MockUsersResponse;
  beforeEach(() => {
    response = {
      data: [
        {
          id: 1,
          name: "Leanne Graham",
        },
        {
          id: 2,
          name: "Ervin Howell",
        },
        {
          id: 3,
          name: "Clementine Bauch",
        },
      ],
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders learn react link", async () => {
    (axios.get as jest.Mock).mockReturnValue(response);
    renderTestApp("/users");
    const users = await screen.findAllByTestId("user-item");
    expect(users.length).toBe(3);
    expect(axios.get).toBeCalledTimes(1);
  });

  test("redirect to details", async () => {
    (axios.get as jest.Mock).mockReturnValue(response);
    renderTestApp("/users");
    const users = await screen.findAllByTestId("user-item");
    act(() => {
      userEvent.click(users[0]);
    });
    expect(screen.getByTestId("user-page")).toBeInTheDocument();
  });
});

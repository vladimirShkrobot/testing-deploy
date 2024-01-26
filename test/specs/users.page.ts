import { expect } from "@wdio/globals";
import usersPage from "../pageobjects/users.page";

describe("users page", () => {
  it("load data", async () => {
    await usersPage.loadData();
  });

	it("delete user", async () => {
    await usersPage.loadData();
		await usersPage.deleteUser();
  });
});

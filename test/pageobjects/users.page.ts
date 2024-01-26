import { $ } from "@wdio/globals";
import Page from "./page";

class UsersPage extends Page {
  get loadingTitle() {
    return $("#users-loading");
  }

  get usersList() {
    return $("#users-list");
  }

  get userItems() {
    return browser.$$("#user-item");
  }

  async loadData() {
    try {
      await this.open();
      await this.loadingTitle.waitForDisplayed({ timeout: 2000 });
      await this.usersList.waitForDisplayed({ timeout: 2000 });
    } catch (error) {
      throw new Error("Не удалось загрузить пользователей");
    }
  }

  async deleteUser() {
    try {
      const userCount = await this.userItems;
      if (!userCount.length) {
        throw new Error("no users");
      }
      await this.userItems[1].$("#user-delete").click();
      const userCountAfterDelete = await this.userItems;
      if (
        userCount[1].elementId === userCountAfterDelete[1].elementId &&
        userCount.length - userCountAfterDelete.length !== 1
      ) {
        throw new Error(`delete didn't happen`);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error("не удалось удалить юзера " + error.message);
      }
    }
  }

  open() {
    return super.open("users-e2e");
  }
}

export default new UsersPage();

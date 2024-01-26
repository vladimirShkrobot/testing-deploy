import { $ } from "@wdio/globals";
import Page from "./page";

class HelloPage extends Page {
  get toggleBtn() {
    return $("#toggle");
  }

  get searchInput() {
    return $("#search");
  }

  get helloTitle() {
    return $("#hello");
  }

  async toggleTitleWithInput(text: string) {
    await this.searchInput.setValue(text);
    await this.toggleBtn.click();
  }

  public open() {
    return super.open("hello");
  }
}

export default new HelloPage();

import { expect } from "@wdio/globals";
import helloPage from "../pageobjects/hello.page";

describe("My hello world page", () => {
  it("should toggle", async () => {
    await helloPage.open();
    await helloPage.toggleTitleWithInput("hello");
    await expect(helloPage.helloTitle).toBeExisting();
		await helloPage.toggleBtn.click();
		await expect(helloPage.helloTitle).not.toBeExisting();
  });

	it("should not toggle", async () => {
    await helloPage.open();
    await helloPage.toggleTitleWithInput("qwqw");
    await expect(helloPage.helloTitle).not.toBeExisting();

  });
});

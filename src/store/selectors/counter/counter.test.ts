import { getCounterValue } from "./counter";

describe("getCounterValue", () => {
  test("", () => {
    expect(getCounterValue({ counter: { value: 100 } })).toBe(100);
  });
});

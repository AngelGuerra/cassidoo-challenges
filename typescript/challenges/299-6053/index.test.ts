import { expect, describe, it } from "vitest";
import { oddSquareSum } from ".";

// Talk is cheap, show me the code
describe.concurrent("Check results", () => {
  it("gets 0 if there's no odd-square numbers", () => {
    expect(oddSquareSum(1)).toBe(0);
  });

  it("gets 1 with the number 2", () => {
    expect(oddSquareSum(2)).toBe(1);
  });

  it("returns only the sum of the smaller odd-square numbers", () => {
    expect(oddSquareSum(9)).toBe(1);
  });

  it("gets 10 (1+9) with the number 10", () => {
    expect(oddSquareSum(10)).toBe(10);
  });

  it("gets 35 (1+9+25) with the number 44", () => {
    expect(oddSquareSum(44)).toBe(35);
  });
});

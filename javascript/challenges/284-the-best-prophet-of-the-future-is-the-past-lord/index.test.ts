import { expect, describe, it } from "vitest";
import { missingBits } from ".";

// Talk is cheap, show me the code
describe.concurrent("Check results", () => {
  it("test with single range of missing numbers", async () => {
    const expected = "[1, 2, 3, 4, ..., 20, 21, 22, 23]";
    expect(missingBits([1, 2, 3, 4, 20, 21, 22, 23])).toBe(expected);
  });

  it("test with multiple range of missing numbers", async () => {
    const expected = "[1, 2, 3, ..., 20, ..., 27]";
    expect(missingBits([1, 3, 20, 27])).toBe(expected);
  });

  it("test with single missing numbers", async () => {
    const expected = "[1, 2, 3, 4, 5, 6]";
    expect(missingBits([1, 2, 3, 5, 6])).toBe(expected);
  });

  it("test with unordered array", async () => {
    const expected = "[1, 2, 3, ..., 7]";
    expect(missingBits([7, 1, 3, 2])).toBe(expected);
  });

  it("test with negative numbers", async () => {
    const expected = "[-9, -8, -7, -6, -5, ..., 7, 8, 9, ..., 15, 16, 17]";
    expect(missingBits([-9, -8, -6, -5, 7, 9, 15, 17])).toBe(expected);
  });

  it("test with short array", async () => {
    expect(missingBits([1, 4])).toBe("[1, ..., 4]");
  });

  it("test with single number", async () => {
    expect(missingBits([4])).toBe("[4]");
  });

  it("test with single range of missing numbers changing the gap", async () => {
    const expected = "[1, 2, 3, 4, 5, 6, ..., 10, 11]";
    expect(missingBits([1, 2, 5, 6, 10, 11], 3)).toBe(expected);
  });
});

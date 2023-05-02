import { expect, describe, it } from "vitest";
import { removeZeroes } from ".";

// Talk is cheap, show me the code
describe.concurrent("Check results", () => {
  it("throws an error when invalid input is provided", async () => {
    expect(() => removeZeroes([])).toThrowError("List cannot be empty.");
  });

  it("removes leading and trailing zeroes", () => {
    expect(removeZeroes([0, 0, 3, 1, 1, 0, 5, 9, 0, 0, 0])).toEqual([
      3, 1, 1, 0, 5, 9,
    ]);
  });

  it("removes all items", () => {
    expect(removeZeroes([0, 0, 0])).toEqual([]);
  });

  it("does not remove anything", () => {
    expect(removeZeroes([8])).toEqual([8]);
  });
});

import { expect, describe, it } from "vitest";
import { trimArray } from ".";

// Talk is cheap, show me the code
describe.concurrent("Check results", () => {
  it("throws an error when n argument is negative", async () => {
    expect(() => trimArray([1, 2], -2, 1)).toThrowError(
      "n and m must be non-negative."
    );
  });

  it("throws an error when m argument is negative", async () => {
    expect(() => trimArray([1, 2], 2, -1)).toThrowError(
      "n and m must be non-negative."
    );
  });

  it("throws an error when n + m is greater than array length", async () => {
    expect(() => trimArray([1, 2], 2, 4)).toThrowError(
      "n + m exceeds the length of the array."
    );
  });

  it("trim the array according to the first example", () => {
    expect(trimArray([1, 2, 3, 4, 5, 6], 2, 1)).toEqual([3, 4, 5]);
  });

  it("trim the array according to the second example", () => {
    expect(trimArray([6, 2, 4, 3, 7, 1, 3], 5, 0)).toEqual([1, 3]);
  });

  it("trim the array according to the third example", () => {
    expect(trimArray([1, 7], 0, 0)).toEqual([1, 7]);
  });
});

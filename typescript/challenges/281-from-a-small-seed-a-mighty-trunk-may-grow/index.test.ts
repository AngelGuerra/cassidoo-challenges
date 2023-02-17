import { expect, describe, it } from "vitest";
import { maxSubarray } from ".";

// Talk is cheap, show me the code
describe.concurrent("Check errors", () => {
  it("test when length is greather than array length", async () => {
    expect(() => maxSubarray([1, 2, 3], 4)).toThrowError(
      "The given length exceeds the length of the array."
    );
  });
});

describe.concurrent("Check results", () => {
  it("test example ([-4, 2, -5, 1, 2, 3, 6, -5, 1], 4) must be [1, 2, 3, 6]", async () => {
    expect(maxSubarray([-4, 2, -5, 1, 2, 3, 6, -5, 1], 4)).toStrictEqual([
      1, 2, 3, 6,
    ]);
  });

  it("test example [1, 2, 0, 5], 2 must be [0, 5]", async () => {
    expect(maxSubarray([1, 2, 0, 5], 2)).toStrictEqual([0, 5]);
  });
});

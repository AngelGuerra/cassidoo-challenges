import { expect, describe, it } from "vitest";
import { maxPointsOnLine } from ".";

// Talk is cheap, show me the code
describe.concurrent("Check results", () => {
  it("example A returns the correct quantity in a straight line", () => {
    expect(maxPointsOnLine([[1, 1]])).toBe(1);
  });

  it("example B returns the correct quantity in a straight line", () => {
    expect(
      maxPointsOnLine([
        [1, 1],
        [3, 2],
        [5, 3],
        [4, 1],
        [2, 3],
        [1, 4],
      ])
    ).toBe(4);
  });

  it("example C returns the correct quantity in a straight line", () => {
    expect(
      maxPointsOnLine([
        [0, 6],
        [0, 5],
        [0, 4],
        [1, 4],
        [2, 4],
        [0, 0],
      ])
    ).toBe(4);
  });
});

import { expect, describe, it } from "vitest";
import { rectangleSum } from ".";

// Talk is cheap, show me the code
describe.concurrent("Check errors", () => {
  it("test when reference array is not square", async () => {
    expect(() => rectangleSum([6, 9, -7, 3, 8], [6, 9, -7, 3])).toThrowError(
      "The array must have length in order to become a square."
    );
  });

  it("test when input array length is not 4", async () => {
    expect(() =>
      rectangleSum(
        [6, 9, -7, 3, 8, -1, -6, -4, 2, -7, 7, -7, -1, 4, 7, 9],
        [6, 9, -7]
      )
    ).toThrowError("A rectangle has only 4 corners.");
  });

  it("test when input array contains invalid number", async () => {
    expect(() =>
      rectangleSum(
        [6, 9, -7, 3, 8, -1, -6, -4, 2, -7, 7, -7, -1, 4, 7, 9],
        [-1, 8, 3, 52]
      )
    ).toThrowError("All corners must be inside the reference array.");
  });

  it("test when array is not a rectangle 01", async () => {
    expect(() =>
      /*
       * [
       *   6, 9, -7, 3*,
       *   8*, -1*, -6, -4,
       *   2*, -7, 7, -7,
       *   -1, 4, 7, 9
       * ]
       */
      rectangleSum(
        [6, 9, -7, 3, 8, -1, -6, -4, 2, -7, 7, -7, -1, 4, 7, 9],
        [-1, 8, 3, 2]
      )
    ).toThrowError(
      "Not enough coordinates have been found to create the rectangle."
    );
  });

  it("test when array is not a rectangle 02", async () => {
    expect(() =>
      /*
       * [
       *   6*, 9*, -7, 3,
       *   8, -1, -6, -4,
       *   2, -7, 7, -7,
       *   -1, 4, 7, 9
       * ]
       */
      rectangleSum(
        [6, 9, -7, 3, 8, -1, -6, -4, 2, -7, 7, -7, -1, 4, 7, 9],
        [6, 9, 8, -4]
      )
    ).toThrowError("No rectangle has been found with the given coordinates.");
  });
});

describe.concurrent(
  "Check rectangles with array [6, 9, -7, 3, 8, -1, -6, -4, 2, -7, 7, -7, -1, 4, 7, 9]",
  () => {
    const n = [6, 9, -7, 3, 8, -1, -6, -4, 2, -7, 7, -7, -1, 4, 7, 9];

    it("[-1, 8, -7, 2] must be 2", async () => {
      expect(
        /*
         * [
         *   6, 9, -7, 3,
         *   8*, -1*, -6, -4,
         *   2*, -7*, 7, -7,
         *   -1, 4, 7, 9
         * ]
         */
        rectangleSum(n, [-1, 8, -7, 2])
      ).toBe(2);
    });

    it("[6, 3, 2, -7] must be 3", async () => {
      expect(
        /*
         * [
         *   6*, 9, -7, 3*,
         *   8, -1, -6, -4,
         *   2*, -7, 7, -7*,
         *   -1, 4, 7, 9
         * ]
         */
        rectangleSum(n, [6, 3, 2, -7])
      ).toBe(3);
    });

    it("[6, 3, 2, -7] must be 3", async () => {
      expect(
        /*
         * [
         *   6*, 9, -7, 3*,
         *   8, -1, -6, -4,
         *   2, -7, 7, -7,
         *   -1*, 4, 7, 9*
         * ]
         */
        rectangleSum(n, [-1, 3, 9, 6])
      ).toBe(22);
    });
  }
);

describe.concurrent("Check multiple rectangles", () => {
  it("[1, 1, 4, 4] must be 20", async () => {
    expect(
      /*
       * [
       *   1*, 2, 3, 4*,
       *   4*, 3, 2, 1*,
       *   1, 5, 6, 4,
       *   4, 6, 5, 1
       * ]
       */
      rectangleSum(
        [1, 2, 3, 4, 4, 3, 2, 1, 1, 2, 3, 4, 4, 3, 2, 1],
        [1, 1, 4, 4]
      )
    ).toBe(20);
  });
});

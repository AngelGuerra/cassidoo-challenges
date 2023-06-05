import { expect, describe, it } from "vitest";
import { mmmPie } from ".";

// Talk is cheap, show me the code
describe.concurrent("Check results", () => {
  it("throws an error when person wants negative number of pieces", async () => {
    const arr = [
      { name: "Joe", num: 9 },
      { name: "Cami", num: 3 },
      { name: "Cassidy", num: -3 },
    ];

    expect(() => mmmPie(arr, 8)).toThrowError(
      "Cassidy cannot want a negative number of pieces (-3)."
    );
  });

  it("gets 2 cakes when 16 pieces are needed with max 8 per cake", () => {
    const arr = [
      { name: "Joe", num: 9 },
      { name: "Cami", num: 3 },
      { name: "Cassidy", num: 4 },
    ];

    expect(mmmPie(arr, 8)).toBe(2);
  });

  it("gets 3 cakes when 16 pieces are needed with max 6 per cake", () => {
    const arr = [
      { name: "Joe", num: 9 },
      { name: "Cami", num: 3 },
      { name: "Cassidy", num: 4 },
    ];

    expect(mmmPie(arr, 6)).toBe(3);
  });
});

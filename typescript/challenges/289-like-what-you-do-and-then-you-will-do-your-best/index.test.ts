import { expect, describe, it } from "vitest";
import { repeatedGroups } from ".";

// Talk is cheap, show me the code
describe.concurrent("Check results", () => {
  it("test without coincidences", async () => {
    expect(repeatedGroups([1, 2, 5, 4, 5])).toEqual([]);
  });

  it("test with single coincidence", async () => {
    expect(repeatedGroups([1, 2, 2, 4, 5])).toEqual([[2, 2]]);
  });

  it("test with multiple coincidences", async () => {
    expect(repeatedGroups([1, 1, 0, 0, 8, 4, 4, 4, 3, 2, 1, 9, 9])).toEqual([
      [1, 1],
      [0, 0],
      [4, 4, 4],
      [9, 9],
    ]);
  });
});

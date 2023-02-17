import { expect, describe, it } from "vitest";
import { generateArrays } from ".";

// Talk is cheap, show me the code
describe.concurrent("Check results", () => {
  it("test with invalid length must thrown an error", async () => {
    expect(() => generateArrays(0)).toThrowError(
      "Length must be a positive number."
    );
  });

  it("test with array length = 4", async () => {
    expect(generateArrays(4)).toEqual([[1], [1, 2], [1, 2, 3], [1, 2, 3, 4]]);
  });

  it("test with array length = 1", async () => {
    expect(generateArrays(1)).toEqual([[1]]);
  });
});

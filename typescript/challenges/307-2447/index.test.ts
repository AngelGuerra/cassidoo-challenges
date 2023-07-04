import { expect, describe, it } from "vitest";
import { reversedSquares } from ".";

// Talk is cheap, show me the code
describe.concurrent("Check results", () => {
  it("returns false if the number is negative", () => {
    expect(reversedSquares(-4)).toBe(false);
  });

  it("returns true when is a perfect square and only has one digit", () => {
    expect(reversedSquares(9)).toBe(true);
  });

  it("returns true when is a perfect square", () => {
    expect(reversedSquares(441)).toBe(true);
  });

  it("returns false when is not a perfect square", () => {
    expect(reversedSquares(98)).toBe(false);
  });

  it("returns false when the reverse number is not a perfect square", () => {
    expect(reversedSquares(25)).toBe(false);
  });
});

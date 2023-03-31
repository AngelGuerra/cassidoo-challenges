import { expect, describe, it } from "vitest";
import { rollDice } from ".";

// Talk is cheap, show me the code
describe.concurrent("Check results", () => {
  it("addition: the result must be between min and max values", async () => {
    Array(100).forEach(() => {
      expect(rollDice("d3+2d4")).toBeGreaterThanOrEqual(3); // 1 + 2
      expect(rollDice("d3+2d4")).toBeLessThanOrEqual(11); // 3 + 8
    });
  });

  it("subtraction: the result must be between min and max values", async () => {
    Array(100).forEach(() => {
      expect(rollDice("d3-2d4")).toBeGreaterThanOrEqual(-7); // 1 - 8
      expect(rollDice("d3-2d4")).toBeLessThanOrEqual(1); // 3 - 11
    });
  });

  it("multiplication: the result must be between min and max values", async () => {
    Array(100).forEach(() => {
      expect(rollDice("d3*2d4")).toBeGreaterThanOrEqual(2); // 1 * 2
      expect(rollDice("d3*2d4")).toBeLessThanOrEqual(24); // 3 * 8
    });
  });

  it("addition: the result must be between min and max values", async () => {
    Array(100).forEach(() => {
      expect(rollDice("d3/2d4")).toBeGreaterThanOrEqual(1 / 8);
      expect(rollDice("d3/2d4")).toBeLessThanOrEqual(3 / 2);
    });
  });
});

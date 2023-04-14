import { expect, describe, it } from "vitest";
import { calculateStarAngle } from ".";

// Talk is cheap, show me the code
describe.concurrent("Check results", () => {
  it("throws an error when invalid input is provided", async () => {
    expect(() => calculateStarAngle(2)).toThrowError(
      "A star has to have at least 3 points."
    );
  });

  it("returns the correct internal angle for 5 points star", () => {
    expect(calculateStarAngle(5)).toEqual({ "{5/2}": 36 });
  });

  it("returns the correct internal angle for 6 points star", () => {
    expect(calculateStarAngle(6)).toEqual({ "{6/2}": 60 });
  });

  it("returns the correct internal angle for 7 points star", () => {
    expect(calculateStarAngle(7)).toEqual({ "{7/2}": 77.143, "{7/3}": 25.714 });
  });

  it("returns the correct internal angle for 8 points star", () => {
    expect(calculateStarAngle(8)).toEqual({ "{8/2}": 90, "{8/3}": 45 });
  });

  it("returns the correct internal angle for 9 points star", () => {
    expect(calculateStarAngle(9)).toEqual({
      "{9/2}": 100,
      "{9/3}": 60,
      "{9/4}": 20,
    });
  });

  it("returns the correct internal angle for 10 points", () => {
    expect(calculateStarAngle(10)).toEqual({
      "{10/2}": 108,
      "{10/3}": 72,
      "{10/4}": 36,
    });
  });
});

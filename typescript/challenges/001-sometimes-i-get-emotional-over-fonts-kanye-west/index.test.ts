import { expect, describe, it } from "vitest";
import { integerToRoman } from ".";

// Talk is cheap, show me the code
describe.concurrent("Check conversions", () => {
  it("when convert 0 to roman must throw an error", async () => {
    expect(() => integerToRoman(0)).toThrowError(
      "The number must be between 0 and 3,999."
    );
  });

  it("when convert 9999 to roman must throw an error", async () => {
    expect(() => integerToRoman(9999)).toThrowError(
      "The number must be between 0 and 3,999."
    );
  });

  it("when convert 3,999 to roman must be MMMCMXCIX", async () => {
    expect(integerToRoman(3999)).toBe("MMMCMXCIX");
  });

  it("when convert 1,904 to roman must be MCMIV", async () => {
    expect(integerToRoman(1904)).toBe("MCMIV");
  });

  it("when convert 1 to roman must be I", async () => {
    expect(integerToRoman(1)).toBe("I");
  });

  it("when convert 3,549 to roman must be MMMDXLIX", async () => {
    expect(integerToRoman(3549)).toBe("MMMDXLIX");
  });

  it("when convert 789 to roman must be DCCLXXXIX", async () => {
    expect(integerToRoman(789)).toBe("DCCLXXXIX");
  });
});

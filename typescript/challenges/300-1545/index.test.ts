import { expect, describe, it } from "vitest";
import { binaryPal } from ".";

// Talk is cheap, show me the code
describe.concurrent("Check results", () => {
  it("throws an error when input is not Integer", async () => {
    expect(() => binaryPal(3.4)).toThrowError("Number must be Integer.");
  });

  it("throws an error when input is not a Natural number", async () => {
    expect(() => binaryPal(-6)).toThrowError("Number must be Natural.");
  });

  it("gets true if number is palindrome", () => {
    expect(binaryPal(5)).toBe(true);
  });

  it("gets false if number is not palindrome", () => {
    expect(binaryPal(10)).toBe(false);
  });
});

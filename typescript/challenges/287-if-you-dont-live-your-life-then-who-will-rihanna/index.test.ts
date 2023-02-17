import { expect, describe, it } from "vitest";
import {
  printNumbersWithCharCodeAt,
  printNumbersWithStringLength,
  printNumbersWithMathPow,
  printNumbersWithDoWhile,
  printNumbersWithHex,
} from ".";

// Talk is cheap, show me the code
describe.concurrent("Check results", () => {
  const EXPECTED = [...Array(101).keys()];

  it("test results with charCodeAt version", async () => {
    expect(printNumbersWithCharCodeAt()).toEqual(EXPECTED);
  });

  it("test results with string length version", async () => {
    expect(printNumbersWithStringLength()).toEqual(EXPECTED);
  });

  it("test results with Math.pow version", async () => {
    expect(printNumbersWithMathPow()).toEqual(EXPECTED);
  });

  it("test results with Math.pow version", async () => {
    expect(printNumbersWithDoWhile()).toEqual(EXPECTED);
  });

  it("test results with Math.pow version", async () => {
    expect(printNumbersWithHex()).toEqual(EXPECTED);
  });
});

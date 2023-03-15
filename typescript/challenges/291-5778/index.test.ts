import { expect, describe, it } from "vitest";
import { fractionMath } from ".";

// Talk is cheap, show me the code
describe.concurrent("Check results", () => {
  it("test with invalid denominator must thrown an error", async () => {
    expect(() => fractionMath("3/4", "add", "3/0")).toThrowError(
      "Denominator can't be 0."
    );
  });

  it("test with invalid input format must thrown an error", async () => {
    expect(() => fractionMath("--3/4", "add", "3/0")).toThrowError(
      "At least one of the inputs is invalid."
    );
  });

  it("test add fractions", async () => {
    expect(fractionMath("3/4", "add", "3/4")).toBe("3/2");
  });

  it("test subtract fractions", async () => {
    expect(fractionMath("1/5", "subtract", "1/6")).toBe("1/30");
  });

  it("test multiply fractions", async () => {
    expect(fractionMath("1/8", "multiply", "2/2")).toBe("1/8");
  });

  it("test divide fractions", async () => {
    expect(fractionMath("3/4", "divide", "5/7")).toBe("21/20");
  });

  it("test add with negative numerator", async () => {
    expect(fractionMath("-3/9", "add", "6/9")).toBe("1/3");
  });

  it("test add with negative denominator", async () => {
    expect(fractionMath("-3/-12", "add", "6/9")).toBe("11/12");
  });

  it("test multiply with negative numerators", async () => {
    expect(fractionMath("-3/9", "multiply", "-6/9")).toBe("2/9");
  });

  it("test divide with negative numerators", async () => {
    expect(fractionMath("-3/9", "divide", "-6/9")).toBe("1/2");
  });

  it("test with positive integers", async () => {
    expect(fractionMath("5", "add", "5/7")).toBe("40/7");
  });

  it("test with negative integers", async () => {
    expect(fractionMath("-3", "add", "6/9")).toBe("-7/3");
  });

  it("test with result === 0", async () => {
    expect(fractionMath("1/4", "add", "1/-4")).toBe("0");
  });

  it("test with result === 1", async () => {
    expect(fractionMath("1/2", "add", "1/2")).toBe("1");
  });

  it("test with result === -1", async () => {
    expect(fractionMath("1/2", "subtract", "3/2")).toBe("-1");
  });

  it("test with integer result", async () => {
    expect(fractionMath("6/5", "add", "4/5")).toBe("2");
  });

  it("test with negative integer result", async () => {
    expect(fractionMath("-6/5", "subtract", "4/5")).toBe("-2");
  });
});

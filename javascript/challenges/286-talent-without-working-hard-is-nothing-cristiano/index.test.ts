import { expect, describe, it } from "vitest";
import { getColumnNumber } from ".";

// Talk is cheap, show me the code
describe.concurrent("Check results", () => {
  it("test with invalid length must thrown an error", async () => {
    expect(() => getColumnNumber("HO1")).toThrowError(
      "Column can only contain chars from A to Z."
    );
  });

  it("test with columna A must be 1", async () => {
    expect(getColumnNumber("A")).toBe(1)
  });

  it("test with column B must be 2", async () => {
    expect(getColumnNumber("B")).toBe(2);
  });

  it("test with column c must be 3", async () => {
    expect(getColumnNumber("c")).toBe(3);
  });

  it("test with column z must be 26", async () => {
    expect(getColumnNumber("z")).toBe(26);
  });

  it("test with column AA must be 27", async () => {
    expect(getColumnNumber("aA")).toBe(27);
  });

  it("test with column AZ must be 52", async () => {
    expect(getColumnNumber("AZ")).toBe(52);
  });

  it("test with column iv must be 256", async () => {
    expect(getColumnNumber("iv")).toBe(256);
  });

  it("test with column AAA must be 703", async () => {
    expect(getColumnNumber("aaa")).toBe(703);
  });

  it("test with column XFD must be 16384", async () => {
    expect(getColumnNumber("XFD")).toBe(16384);
  });
});

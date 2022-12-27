import { expect, describe, it } from "vitest";
import { replaceZeros } from ".";

// Talk is cheap, show me the code
describe.concurrent("Check errors", () => {
  it("test when input is empty", async () => {
    expect(() => replaceZeros("")).toThrowError(
      "Input must contain only digits."
    );
  });

  it("test when input doesn't contain only numbers", async () => {
    expect(() => replaceZeros("angel00123456")).toThrowError(
      "Input must contain only digits."
    );
  });
});

describe.concurrent("Check replaces", () => {
  it("test example 01", async () => {
    expect(replaceZeros("1234500362000440")).toBe("1234523623441");
  });

  it("test example 02", async () => {
    expect(replaceZeros("123450036200044")).toBe("123452362344");
  });

  it("test example 03", async () => {
    expect(replaceZeros("000000000000")).toBe("12");
  });

  it("test example 04", async () => {
    expect(replaceZeros("123456789")).toBe("123456789");
  });
});

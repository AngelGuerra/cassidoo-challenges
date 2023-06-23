import { expect, describe, it } from "vitest";
import { depthJSON } from ".";

// Talk is cheap, show me the code
describe.concurrent("Check results", () => {
  it("gets max depth as 1 if the data is empty", () => {
    expect(depthJSON([])).toBe(1);
  });

  it("gets max depth as 1 if it is a single dimension array", () => {
    expect(depthJSON([1, 2, 3, 4, 5])).toBe(1);
  });

  it("check the dimensions with nested objects", () => {
    expect(depthJSON([{ a: [] }, ["abc"]])).toEqual(3);
  });

  it("check the dimensions with nested arrays", () => {
    expect(depthJSON([{ a: [] }, ["abc"], [[[2, { a: [[2]] }]]]])).toEqual(7);
  });
});

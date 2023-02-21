import { expect, describe, it } from "vitest";
import { numBalanced } from ".";

// Talk is cheap, show me the code
describe.concurrent("Check results", () => {
  it("'()' must return 0", async () => {
    expect(numBalanced("()")).toBe(0);
  });

  it("'(()' must return 1", async () => {
    expect(numBalanced("(()")).toBe(1);
  });

  it("'))()))))()' must return 6", async () => {
    expect(numBalanced("))()))))()")).toBe(6);
  });

  it("')))))' must return 5", async () => {
    expect(numBalanced(")))))")).toBe(5);
  });
});

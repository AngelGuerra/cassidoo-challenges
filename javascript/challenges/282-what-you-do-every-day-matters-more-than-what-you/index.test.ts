import { expect, describe, it } from "vitest";
import { sumEveryOther } from ".";

// Talk is cheap, show me the code
describe.concurrent("Check errors", () => {
  it("test example 548915381 must be 26", async () => {
    expect(sumEveryOther(548915381)).toBe(26);
  });

  it("test example 10 must be 0", async () => {
    expect(sumEveryOther(10)).toBe(0);
  });

  it("test example 10 must be 0", async () => {
    expect(sumEveryOther(1010.11)).toBe(1);
  });

  it("test example 10 must be 0", async () => {
    expect(sumEveryOther(98763.4604)).toBe(18);
  });
});

import { expect, describe, it } from "vitest";
import { capitalAfterVowelWithoutRegex, capitalAfterVowelWithRegex } from ".";

describe.concurrent("Check conversions", () => {
  it("test with regex example 01", async () => {
    expect(capitalAfterVowelWithRegex("hello world")).toBe("heLlo WoRld");
  });

  it("test with regex example 02", async () => {
    expect(capitalAfterVowelWithRegex("xaabeuekadii")).toBe("xaaBeueKaDii");
  });

  it("test without regex example 01", async () => {
    expect(capitalAfterVowelWithoutRegex("hello world")).toBe("heLlo WoRld");
  });

  it("test without regex example 02", async () => {
    expect(capitalAfterVowelWithoutRegex("xaabeuekadii")).toBe("xaaBeueKaDii");
  });
});

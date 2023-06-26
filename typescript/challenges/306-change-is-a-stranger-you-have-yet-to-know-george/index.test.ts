import { expect, describe, it } from "vitest";
import { missingLetters } from ".";

// Talk is cheap, show me the code
describe.concurrent("Check results", () => {
  it("throws an error when data is not in ascending order", async () => {
    expect(() => missingLetters(["a", "b", "f", "e"])).toThrowError(
      "Data must be sorted in ascending order."
    );
  });

  it("throws an error when data is not in ascending order", async () => {
    expect(() => missingLetters(["a", "b", "f", "2"])).toThrowError(
      'Data must contain only characters between "a" and "z".'
    );
  });

  it("gets missing char when only one block is missing", () => {
    expect(missingLetters(["a", "b", "c", "d", "f"])).toStrictEqual(["e"]);
  });

  it("gets missing char when multiple blocks are missing", () => {
    expect(
      missingLetters([
        "a",
        "b",
        "c",
        "d",
        "e",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "w",
        "x",
        "y",
        "z",
      ])
    ).toStrictEqual(["f", "g", "v"]);
  });
});

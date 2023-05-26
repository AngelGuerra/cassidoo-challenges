import { expect, describe, it } from "vitest";
import { scrabbleScore } from ".";

// Talk is cheap, show me the code
describe.concurrent("Check results", () => {
  it("throws an error when the word does not fit in the board horizontally", async () => {
    expect(() => scrabbleScore("fizzbuzz", 10)).toThrowError(
      "The word exceeds the limit of the board."
    );
  });

  it("throws an error when the word does not fit in the board vertically", async () => {
    expect(() => scrabbleScore("fizzbuzz", 179, true)).toThrowError(
      "The word exceeds the limit of the board."
    );
  });

  it("throws an error when the word contains invalid chars", async () => {
    expect(() => scrabbleScore("h3llo", 1)).toThrowError(
      "The word contains invalid chars."
    );
  });

  it("gets the score when is a horizontal word starting in the top left corner", () => {
    expect(scrabbleScore("fizzbuzz", 0)).toBe(531);
  });

  it("gets the score when is a vertical word starting in the top left corner", () => {
    expect(scrabbleScore("fizzbuzz", 15, true)).toBe(177);
  });

  it("gets the score when word has double word extra and triple letter", () => {
    expect(scrabbleScore("mother", 16)).toBe(26);
  });
});

import { expect, describe, it } from "vitest";
import { scramble } from ".";

interface TMatch {
  value: string;
  index: number;
}

function getMatches(input: string, regexp: RegExp): TMatch[] {
  return [...input.matchAll(new RegExp(regexp, "g"))].map((match) => ({
    value: match[0],
    index: match.index as number,
  }));
}

// Talk is cheap, show me the code
describe.concurrent("Check results", () => {
  const input = "A quick brown fox jumped over the lazy dog.";

  it("respect word length", async () => {
    expect(scramble(input).length).toBe(input.length);
  });

  it("respect non-word characters", async () => {
    const indexes = getMatches(input, /\W/);
    const result = scramble(input);

    indexes.forEach(({ value, index }) => {
      expect(result.at(index)).toBe(value);
    });
  });

  it("respect words of three or less characters", async () => {
    const words = getMatches(input, /\b\w{1,3}\b/);
    const result = scramble(input);

    words.forEach(({ value }) => {
      expect(result.includes(value)).toBe(true);
    });
  });

  it("respect first character of long words", async () => {
    const words = getMatches(input, /\b\w{4,}\b/);
    const result = scramble(input);

    words.forEach(({ value, index }) => {
      expect(result.at(index)).toBe(value[0]);
    });
  });

  it("respect last character of long words", async () => {
    const words = getMatches(input, /\b\w{4,}\b/);
    const result = scramble(input);

    words.forEach(({ value, index }) => {
      expect(result.at(index + value.length - 1)).toBe(value.at(-1));
    });
  });

  it("respect ordinal numbers", async () => {
    const inputWithNumbers = "1234567890 87654 12.";
    expect(scramble(inputWithNumbers)).toBe(inputWithNumbers);
  });

  it("respect cardinal numbers", async () => {
    const inputWithNumbers = "21st 15th 32nd 93rd";
    expect(scramble(inputWithNumbers)).toBe(inputWithNumbers);
  });
});

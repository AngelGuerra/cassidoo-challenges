import { expect, describe, it } from "vitest";
import { wordleGuess } from ".";

// // Talk is cheap, show me the code
describe.concurrent("Check errors", () => {
  it("test when input has less than 5 characters", async () => {
    expect(() => wordleGuess("fake", "angel")).toThrowError(
      "Each guess must be a valid 5-letter word."
    );
  });

  it("test when solution has less than 5 characters", async () => {
    expect(() => wordleGuess("angel", "fake")).toThrowError(
      "Each guess must be a valid 5-letter word."
    );
  });
});

describe.concurrent("Check solutions with word 'fudge'", () => {
  const solutionWord = "fudge";

  it("'reads' must has two yellow coincidences", async () => {
    expect(wordleGuess("reads", solutionWord)).toBe("⬛🟨⬛🟨⬛");
  });

  it("'deeds' must has two yellow coincidences", async () => {
    expect(wordleGuess("deeds", solutionWord)).toBe("🟨🟨⬛⬛⬛");
  });

  it("'lodge' must has three green coincidences", async () => {
    expect(wordleGuess("lodge", solutionWord)).toBe("⬛⬛🟩🟩🟩");
  });

  it("test 100% coincidence", async () => {
    expect(wordleGuess("fudge", solutionWord)).toBe("🟩🟩🟩🟩🟩");
  });
});

describe.concurrent("Check solutions with word 'perps'", () => {
  const solutionWord = "perps";

  it("'poppy' must has two green coincidences", async () => {
    expect(wordleGuess("poppy", solutionWord)).toBe("🟩⬛⬛🟩⬛");
  });

  it("'eaeee' must has one yellow coincidence", async () => {
    expect(wordleGuess("eaeee", solutionWord)).toBe("🟨⬛⬛⬛⬛");
  });

  it("'erpsp' must has five yellow coincidences", async () => {
    expect(wordleGuess("erpsp", solutionWord)).toBe("🟨🟨🟨🟨🟨");
  });
});

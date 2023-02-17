import { expect, describe, it } from "vitest";
import { areAnagrams } from ".";

// // Talk is cheap, show me the code
describe.concurrent("Check anagrams", () => {
  it("test 'O, Draconian devil!' and 'Leonardo Da Vinci' must be true", async () => {
    expect(areAnagrams("O, Draconian devil!", "Leonardo Da Vinci")).toBe(true);
  });

  it("test 'Oh, lame saint!' and 'The Mona Lisa' must be true", async () => {
    expect(areAnagrams("Oh, lame saint!", "The Mona Lisa")).toBe(true);
  });

  it("test 'So dark the con of Man' and 'Madonna of the Rocks' must be true", async () => {
    expect(areAnagrams("So dark the con of Man", "Madonna of the Rocks")).toBe(
      true
    );
  });

  it("test 'Tom Marvolo Riddle' and 'I am Lord Voldemort' must be true", async () => {
    expect(areAnagrams("Tom Marvolo Riddle", "I am Lord Voldemort")).toBe(true);
  });

  it("test 'nope' and 'yeah' must be false", async () => {
    expect(areAnagrams("nope", "yeah")).toBe(false);
  });

  it("test 'Punishments' and 'Nine thumps' must be false", async () => {
    expect(areAnagrams("Punishments", "Nine thumps")).toBe(false);
  });
});

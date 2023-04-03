import { expect, describe, it } from "vitest";
import { howManyCharactersDoYouHave } from ".";

// Talk is cheap, show me the code
describe.concurrent("Check results", () => {
  it("must return the exact number of characters", async () => {
    expect(await howManyCharactersDoYouHave()).toBe(
      "1 thousand 2 hundred thirty four"
    );
  });
});

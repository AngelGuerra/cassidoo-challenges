import { expect, describe, it } from "vitest";
import { oneRow } from ".";

// Talk is cheap, show me the code
describe.concurrent("Check results", () => {
  it("gets words written with only one row with QWERTY layout", () => {
    expect(
      oneRow(["candy", "fart", "pop", "Zelda", "flag", "typewriter"])
    ).toStrictEqual(["pop", "flag", "typewriter"]);
  });

  it("gets words written with only one row with DVORAK layout", () => {
    expect(
      oneRow(["cfrp", "fart", "pop", "hideout", "flag", "JVM"], "dvorak")
    ).toStrictEqual(["cfrp", "hideout", "JVM"]);
  });

  it("gets words written with only one row with COLEMAK layout", () => {
    expect(
      oneRow(
        ["candy", "fluffy", "hardstone", "Zelda", "BMX", "typewriter"],
        "colemak"
      )
    ).toStrictEqual(["fluffy", "hardstone", "BMX"]);
  });
});

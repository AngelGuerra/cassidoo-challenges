import { expect, describe, it } from "vitest";
import { Game, Player } from ".";

// Talk is cheap, show me the code
describe("Check player handicaps", () => {
  it("test default player", async () => {
    const player = new Player("Gambler");
    expect(player.name).toBe("Gambler");
    expect(player.amount).toBe(1000);
  });

  it("tests that the player bets more than what he/she has", async () => {
    const player = new Player("Gambler");
    expect(() => player.bet(5000)).toThrowError(
      "You can't bet more than you have."
    );
  });

  it("tests that the player bets less than what he/she has", async () => {
    const player = new Player("Gambler");
    expect(player.bet(250)).toBe(250);
    expect(player.amount).toBe(750);
  });

  it("tests that the player receives points", async () => {
    const player = new Player("Gambler");
    player.collect(750);
    expect(player.amount).toBe(1750);
  });
});

describe("Check gameplay", () => {
  it("test game play and keep the points", async () => {
    const player = new Player("Gambler");
    const game = new Game(player);

    expect(player.amount).toBe(0);
    expect(game.amount).toBe(1000);
    game.spin();
    expect(game.amount).toBe(1000);
    game.deliver();
    expect(game.amount).toBe(0);
    expect(player.amount).toBe(1000);
  });

  it("test game play and lose the points", async () => {
    process.env.STUB_KEY = "LOSE";

    const player = new Player("Gambler");
    const game = new Game(player);

    expect(player.amount).toBe(0);
    expect(game.amount).toBe(1000);
    game.spin();
    expect(game.amount).toBe(0);
    expect(() => game.spin()).toThrowError(
      "You can no longer play because you have no points."
    );
    expect(() => new Game(player)).toThrowError(
      "You cannot play because you have no points."
    );

    delete process.env.STUB_KEY;
  });

  it("test game play and double the points", async () => {
    process.env.STUB_KEY = "DOUBLE";

    const player = new Player("Gambler");
    const game = new Game(player, player.bet(500));

    expect(player.amount).toBe(500);
    expect(game.amount).toBe(500);
    game.spin();
    expect(game.amount).toBe(1000);
    game.spin();
    expect(game.amount).toBe(2000);
    game.deliver();
    expect(game.amount).toBe(0);
    expect(player.amount).toBe(2500);

    delete process.env.STUB_KEY;
  });
});

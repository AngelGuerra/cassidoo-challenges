enum Multipliers {
  LOSE = 0,
  KEEP = 1,
  DOUBLE = 2,
}

export class Player {
  private _name: string;
  private _amount: number;

  constructor(name: string, amount = 1000) {
    this._name = name;
    this._amount = amount;
  }

  get name(): string {
    return this._name;
  }

  get amount(): number {
    return this._amount;
  }

  /**
   * @description Bets and returns a given amount of points, as long as they don't exceed the player's total points.
   * @param {number} amount Number of points bet.
   * @returns {number} Number of points bet.
   */
  bet(amount: number): number {
    if (amount > this._amount) {
      throw new Error("You can't bet more than you have.");
    }

    this._amount -= amount;
    return amount;
  }

  /**
   * @description Adds a number of points to the player's existing points.
   * @param {number} amount Number of points collected.
   */
  collect(amount: number) {
    this._amount += amount;
  }
}

export class Game {
  private _player: Player;
  private _amount: number;

  constructor(player: Player, bet?: number) {
    this._player = player;
    this._amount = bet ?? player.bet(player.amount);

    if (this._amount === 0) {
      throw new Error("You cannot play because you have no points.");
    }
  }

  get amount() {
    return this._amount;
  }

  /** SPIN THE WHEEL! */
  spin() {
    if (this._amount === 0) {
      throw new Error("You can no longer play because you have no points.");
    }

    this._amount *= this._multiplier();
  }

  /**
   * @description Delivers all the points of the game to the player.
   */
  deliver() {
    this._player.collect(this._amount);
    this._amount = 0;
  }

  /**
   *
   * @returns Returns the multiplier, or in other words, the result of the wheel spin.
   */
  private _multiplier(): number {
    if (process.env.NODE_ENV === "test") {
      return this._stubMultiplier();
    }

    const multipliers: string[] = Object.keys(Multipliers).filter(
      (multiplier: string | number) => isNaN(+multiplier)
    );

    const key: string =
      multipliers[Math.floor(Math.random() * multipliers.length)];

    return Multipliers[key];
  }

  // For testing purposes only. Tests should not return random results.
  private _stubMultiplier(): number {
    return Multipliers[process.env.STUB_KEY || "KEEP"];
  }
}

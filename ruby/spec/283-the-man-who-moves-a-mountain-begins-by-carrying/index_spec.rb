# frozen_string_literal: true

require_relative "../../challenges/283-the-man-who-moves-a-mountain-begins-by-carrying/index"

# Talk is cheap, show me the code
RSpec.describe Player do
  it "test default player" do
    player = Player.new "Gambler"
    expect(player.name).to eq "Gambler"
    expect(player.amount).to be 1000
  end

  it "tests that the player bets more than what he/she has" do
    player = Player.new "Gambler"
    expect { player.bet(5000) }.to raise_error(StandardError, "You can't bet more than you have.")
  end

  it "tests that the player bets less than what he/she has" do
    player = Player.new "Gambler"
    expect(player.bet(250)).to be 250
    expect(player.amount).to be 750
  end

  it "tests that the player receives points" do
    player = Player.new "Gambler"
    player.collect(750)
    expect(player.amount).to be 1750
  end
end

RSpec.describe Game do
  it "test random game play" do
    10.times do
      player = Player.new "Gambler"
      game = Game.new player

      expect(player.amount).to be 0
      expect(game.amount).to be 1000
      game.spin
      expect(game.amount).to(satisfy { |value| [0, 1000, 2000].include?(value) })
    end
  end

  it "test game play and keep the points" do
    with_modified_env STUB_KEY: "keep" do
      player = Player.new "Gambler"
      game = Game.new player

      expect(player.amount).to be 0
      expect(game.amount).to be 1000
      game.spin
      expect(game.amount).to be 1000
      game.deliver
      expect(game.amount).to be 0
      expect(player.amount).to be 1000
    end
  end

  it "test game play and lose the points" do
    with_modified_env STUB_KEY: "lose" do
      player = Player.new "Gambler"
      game = Game.new player

      expect(player.amount).to be 0
      expect(game.amount).to be 1000
      game.spin
      expect(game.amount).to be 0
      expect { game.spin }.to raise_error(StandardError, "You can no longer play because you have no points.")
      expect { Game.new(player) }.to raise_error(StandardError, "You cannot play because you have no points.")
    end
  end

  it "test game play and double the points" do
    with_modified_env STUB_KEY: "double" do
      player = Player.new "Gambler"
      game = Game.new player, player.bet(500)

      expect(player.amount).to be 500
      expect(game.amount).to be 500
      game.spin
      expect(game.amount).to be 1000
      game.spin
      expect(game.amount).to be 2000
      game.deliver
      expect(game.amount).to be 0
      expect(player.amount).to be 2500
    end
  end
end

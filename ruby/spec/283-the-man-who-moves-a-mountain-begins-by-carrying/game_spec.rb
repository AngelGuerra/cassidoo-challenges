# frozen_string_literal: true

require_relative '../../challenges/283-the-man-who-moves-a-mountain-begins-by-carrying/index'

# Talk is cheap, show me the code
RSpec.describe Game do
  context 'when start a new game with default bet' do
    let(:player) { Player.new 'Gambler' }
    let!(:game) { described_class.new player }

    it 'test player amount after start a new game' do
      expect(player.amount).to be 0
    end

    it 'test game amount after start a new game' do
      expect(game.amount).to be 1000
    end

    it 'test game play and keep the points' do
      with_modified_env STUB_KEY: 'keep' do
        game.spin
        expect(game.amount).to be 1000
      end
    end

    it 'test game play and lose the points' do
      with_modified_env STUB_KEY: 'lose' do
        game.spin
        expect(game.amount).to be 0
      end
    end

    it 'test game play and double the points' do
      with_modified_env STUB_KEY: 'double' do
        game.spin
        expect(game.amount).to be 2000
      end
    end
  end

  it 'test random game play' do
    10.times do
      game = described_class.new(Player.new('Gambler'))
      game.spin
      expect(game.amount).to(satisfy { |value| [0, 1000, 2000].include?(value) })
    end
  end

  it 'create a game without points must raise an exception' do
    expect do
      described_class.new(Player.new('Gambler', 0))
    end.to raise_error(StandardError, 'You cannot play because you have no points.')
  end

  it 'play a game without points must raise an exception' do
    game = described_class.new(Player.new('Gambler'))
    with_modified_env STUB_KEY: 'lose' do
      game.spin
      expect { game.spin }.to raise_error(StandardError, 'You can no longer play because you have no points.')
    end
  end
end

# frozen_string_literal: true

require_relative '../../challenges/283-the-man-who-moves-a-mountain-begins-by-carrying/index'

# Talk is cheap, show me the code
RSpec.describe Player do
  let(:player) { described_class.new 'Gambler' }

  it 'test default player name' do
    expect(player.name).to eq 'Gambler'
  end

  it 'test default player amount' do
    expect(player.amount).to be 1000
  end

  it 'tests that the player bets more than what he/she has' do
    expect { player.bet(5000) }.to raise_error(StandardError, "You can't bet more than you have.")
  end

  it 'tests that the player bets less than what he/she has' do
    expect(player.bet(250)).to be 250
  end

  it 'test correct amount calculation after a bet' do
    player.bet(250)
    expect(player.amount).to be 750
  end

  it 'tests that the player receives points' do
    player.collect(750)
    expect(player.amount).to be 1750
  end
end

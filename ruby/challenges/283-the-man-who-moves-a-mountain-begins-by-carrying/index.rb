# frozen_string_literal: true

# The gambler
class Player
  attr_reader :name, :amount

  def initialize(name, amount = 1000)
    @name = name
    @amount = amount
  end

  def bet(amount)
    raise "You can't bet more than you have." if amount > @amount

    @amount -= amount
    amount
  end

  def collect(amount)
    @amount += amount
  end
end

# SPIN THE WHEEL!
class Game
  attr_reader :player, :amount

  MULTIPLIERS = { lose: 0, keep: 1, double: 2 }.freeze

  def initialize(player, bet = nil)
    @player = player
    @amount = bet.nil? ? player.bet(player.amount) : bet

    raise 'You cannot play because you have no points.' if @amount.zero?
  end

  def spin
    raise 'You can no longer play because you have no points.' if @amount.zero?

    @amount *= multiplier
  end

  def deliver
    @player.collect(@amount)
    @amount = 0
  end

  private

  def multiplier
    return MULTIPLIERS[ENV['STUB_KEY'].to_sym] if ENV['STUB_KEY']

    MULTIPLIERS[MULTIPLIERS.keys.sample]
  end
end

# frozen_string_literal: true

require_relative "../../challenges/003-sometimes-im-so-sweet-even-i-cant-stand-it-julie/index"

# Talk is cheap, show me the code
RSpec.describe Anagrams do
  it "'O, Draconian devil!' and 'Leonardo Da Vinci' must be true" do
    expect(Anagrams.run("O, Draconian devil!", "Leonardo Da Vinci")).to be true
  end

  it "'Oh, lame saint!' and 'The Mona Lisa' must be true" do
    expect(Anagrams.run("Oh, lame saint!", "The Mona Lisa")).to be true
  end

  it "'So dark the con of Man' and 'Madonna of the Rocks' must be true" do
    expect(Anagrams.run("So dark the con of Man", "Madonna of the Rocks")).to be true
  end

  it "'Tom Marvolo Riddle' and 'I am Lord Voldemort' must be true" do
    expect(Anagrams.run("Tom Marvolo Riddle", "I am Lord Voldemort")).to be true
  end

  it "Punishments' and 'Nine thumps' must be false" do
    expect(Anagrams.run("Punishments", "Nine thumps")).to be false
  end
end

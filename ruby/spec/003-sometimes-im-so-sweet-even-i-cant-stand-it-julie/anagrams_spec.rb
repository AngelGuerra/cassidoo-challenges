# frozen_string_literal: true

require_relative '../../challenges/003-sometimes-im-so-sweet-even-i-cant-stand-it-julie/index'

# Talk is cheap, show me the code
RSpec.describe Anagrams do
  it "'O, Draconian devil!' and 'Leonardo Da Vinci' must be true" do
    expect(described_class.run('O, Draconian devil!', 'Leonardo Da Vinci')).to be true
  end

  it "'Oh, lame saint!' and 'The Mona Lisa' must be true" do
    expect(described_class.run('Oh, lame saint!', 'The Mona Lisa')).to be true
  end

  it "'So dark the con of Man' and 'Madonna of the Rocks' must be true" do
    expect(described_class.run('So dark the con of Man', 'Madonna of the Rocks')).to be true
  end

  it "'Tom Marvolo Riddle' and 'I am Lord Voldemort' must be true" do
    expect(described_class.run('Tom Marvolo Riddle', 'I am Lord Voldemort')).to be true
  end

  it "Punishments' and 'Nine thumps' must be false" do
    expect(described_class.run('Punishments', 'Nine thumps')).to be false
  end
end

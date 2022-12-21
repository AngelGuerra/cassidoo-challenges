# frozen_string_literal: true

require 'minitest/autorun'
require_relative 'index'

# Talk is cheap, show me the code
describe 'AnagramTestSuite' do
  describe "'O, Draconian devil!' and 'Leonardo Da Vinci'" do
    it 'must be true' do
      assert are_anagrams('O, Draconian devil!', 'Leonardo Da Vinci')
    end
  end

  describe "'Oh, lame saint!' and 'The Mona Lisa'" do
    it 'must be true' do
      assert are_anagrams('Oh, lame saint!', 'The Mona Lisa')
    end
  end

  describe "'So dark the con of Man' and 'Madonna of the Rocks'" do
    it 'must be true' do
      assert are_anagrams('So dark the con of Man', 'Madonna of the Rocks')
    end
  end

  describe "'Tom Marvolo Riddle' and 'I am Lord Voldemort'" do
    it 'must be true' do
      assert are_anagrams('Tom Marvolo Riddle', 'I am Lord Voldemort')
    end
  end

  describe "'Punishments' and 'Nine thumps'" do
    it 'must be false' do
      refute are_anagrams('Punishments', 'Nine thumps')
    end
  end
end

# frozen_string_literal: true

require 'minitest/autorun'
require_relative 'index'

# Talk is cheap, show me the code
describe 'IntegerToRomanTestSuiteErrors' do
  describe 'when convert 9,999 to roman' do
    it 'must raise StandardError' do
      assert_raises(StandardError) { integer_to_roman(9999) }
    end
  end

  describe 'when convert 0 to roman' do
    it 'must raise StandardError' do
      assert_raises(StandardError) { integer_to_roman(0) }
    end
  end
end

describe 'IntegerToRomanTestSuite' do
  describe 'when convert 3,999 to roman' do
    it 'must be MMMCMXCIX' do
      assert_equal 'MMMCMXCIX', integer_to_roman(3999)
    end
  end

  describe 'when convert 1,904 to roman' do
    it 'must be MCMIV' do
      assert_equal 'MCMIV', integer_to_roman(1904)
    end
  end

  describe 'when convert 1 to roman' do
    it 'must be I' do
      assert_equal 'I', integer_to_roman(1)
    end
  end

  describe 'when convert 3,549 to roman' do
    it 'must be MMMCMXCIX' do
      assert_equal 'MMMDXLIX', integer_to_roman(3549)
    end
  end

  describe 'when convert 789 to roman' do
    it 'must be DCCLXXXIX' do
      assert_equal 'DCCLXXXIX', integer_to_roman(789)
    end
  end
end

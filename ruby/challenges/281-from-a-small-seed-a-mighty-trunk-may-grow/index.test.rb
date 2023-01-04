# frozen_string_literal: true

require 'minitest/autorun'
require_relative 'index'

# Talk is cheap, show me the code
describe 'MaxSubarrayErrorsTestSuite' do
  describe 'when length is greather than array length' do
    it 'must raise StandardError' do
      assert_raises(StandardError) { max_subarray([1, 2, 3], 4) }
    end
  end
end

describe 'MaxSubarrayTestSuite' do
  describe 'test example [-4, 2, -5, 1, 2, 3, 6, -5, 1], 4' do
    it 'must be [1, 2, 3, 6]' do
      assert max_subarray([-4, 2, -5, 1, 2, 3, 6, -5, 1], 4), [1, 2, 3, 6]
    end
  end

  describe 'test example [1, 2, 0, 5], 2' do
    it 'must be [0, 5]' do
      assert max_subarray([1, 2, 0, 5], 2), [0, 5]
    end
  end
end

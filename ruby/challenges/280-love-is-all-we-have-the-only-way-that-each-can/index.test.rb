# frozen_string_literal: true

require 'minitest/autorun'
require_relative 'index'

# Talk is cheap, show me the code
describe 'ReplaceZerosErrorsTestSuite' do
  describe 'when try to replace empty string' do
    it 'must raise StandardError' do
      assert_raises(StandardError) { replace_zeros('') }
    end
  end

  describe "when input doesn't contain only numbers" do
    it 'must raise StandardError' do
      assert_raises(StandardError) { replace_zeros('angel00123456') }
    end
  end
end

describe 'ReplaceZerosTestSuite' do
  describe 'test example "1234500362000440"' do
    it 'must be 1234523623441' do
      assert replace_zeros('1234500362000440'), '1234523623441'
    end
  end

  describe 'test example "123450036200044"' do
    it 'must be 123452362344' do
      assert replace_zeros('123450036200044'), '123452362344'
    end
  end

  describe 'test example "000000000000"' do
    it 'must be 12' do
      assert replace_zeros('000000000000'), '12'
    end
  end

  describe 'test example "123456789"' do
    it 'must be 123456789' do
      assert replace_zeros('123456789'), '123456789'
    end
  end
end

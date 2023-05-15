# frozen_string_literal: true

require_relative '../../challenges/300-1545/index'

RSpec.describe BinaryPal do
  it 'throws an error when input is not Integer' do
    expect { described_class.run(3.4) }.to raise_error(StandardError, 'Number must be Integer.')
  end

  it 'throws an error when input is not a Natural number' do
    expect { described_class.run(-6) }.to raise_error(StandardError, 'Number must be Natural.')
  end

  it 'gets true if number is palindrome' do
    expect(described_class.run(5)).to be true
  end

  it 'gets false if number is not palindrome' do
    expect(described_class.run(10)).to be false
  end
end

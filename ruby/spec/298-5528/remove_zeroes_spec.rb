# frozen_string_literal: true

require_relative '../../challenges/298-5528/index'

RSpec.describe RemoveZeroes do
  it 'throws an error when invalid input is provided' do
    expect { described_class.run([]) }.to raise_error(StandardError, 'Array cannot be empty.')
  end

  it 'removes leading and trailing zeroes' do
    input = [0, 0, 3, 1, 1, 0, 5, 9, 0, 0, 0]
    expect(described_class.run(input)).to eq([3, 1, 1, 0, 5, 9])
  end

  it 'removes all items' do
    expect(described_class.run([0, 0, 0])).to eq([])
  end

  it 'does not remove anything' do
    expect(described_class.run([8])).to eq([8])
  end
end

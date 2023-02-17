# frozen_string_literal: true

require_relative '../../challenges/284-the-best-prophet-of-the-future-is-the-past-lord/index'

# Talk is cheap, show me the code

RSpec.describe MissingBits do
  it 'test with single range of missing numbers' do
    expected = '[1, 2, 3, 4, ..., 20, 21, 22, 23]'
    expect(described_class.run([1, 2, 3, 4, 20, 21, 22, 23])).to eq expected
  end

  it 'test with multiple range of missing numbers' do
    expected = '[1, 2, 3, ..., 20, ..., 27]'
    expect(described_class.run([1, 3, 20, 27])).to eq expected
  end

  it 'test with single missing numbers' do
    expected = '[1, 2, 3, 4, 5, 6]'
    expect(described_class.run([1, 2, 3, 5, 6])).to eq expected
  end

  it 'test with unordered array' do
    expected = '[1, 2, 3, ..., 7]'
    expect(described_class.run([7, 1, 3, 2])).to eq expected
  end

  it 'test with negative numbers' do
    expected = '[-9, -8, -7, -6, -5, ..., 7, 8, 9, ..., 15, 16, 17]'
    expect(described_class.run([-9, -8, -6, -5, 7, 9, 15, 17])).to eq expected
  end

  it 'test with short array' do
    expect(described_class.run([1, 4])).to eq '[1, ..., 4]'
  end

  it 'test with single number' do
    expect(described_class.run([4])).to eq '[4]'
  end

  it 'test with single range of missing numbers changing the gap' do
    expected = '[1, 2, 3, 4, 5, 6, ..., 10, 11]'
    expect(described_class.run([1, 2, 5, 6, 10, 11], 3)).to eq expected
  end
end

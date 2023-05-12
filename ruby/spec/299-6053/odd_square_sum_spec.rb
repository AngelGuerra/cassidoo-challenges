# frozen_string_literal: true

require_relative '../../challenges/299-6053/index'

RSpec.describe OddSquareSum do
  it "gets 0 if there's no odd-square numbers" do
    expect(described_class.run(1)).to be(0)
  end

  it 'gets 1 with the number 2' do
    expect(described_class.run(2)).to be(1)
  end

  it 'returns only the sum of the smaller odd-square numbers' do
    expect(described_class.run(9)).to be(1)
  end

  it 'gets 10 (1+9) with the number 10' do
    expect(described_class.run(10)).to be(10)
  end

  it 'gets 35 (1+9+25) with the number 44' do
    expect(described_class.run(44)).to be(35)
  end
end

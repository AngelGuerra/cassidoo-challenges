# frozen_string_literal: true

require_relative '../../challenges/001-sometimes-i-get-emotional-over-fonts-kanye-west/index'

# Talk is cheap, show me the code
RSpec.describe IntegerToRoman do
  it 'must raise StandardError when convert 9,999 to roman' do
    expect { described_class.run(9999) }.to raise_error(StandardError)
  end

  it 'must raise StandardError when convert 0 to roman' do
    expect { described_class.run(0) }.to raise_error(StandardError)
  end

  it 'must be MMMCMXCIX when convert 3,999 to roman' do
    expect(described_class.run(3999)).to eq 'MMMCMXCIX'
  end

  it 'must be MCMIV when convert 1,904 to roman' do
    expect(described_class.run(1904)).to eq 'MCMIV'
  end

  it 'must be I when convert 1 to roman' do
    expect(described_class.run(1)).to eq 'I'
  end

  it 'must be MMMDXLIX when convert 3,549 to roman' do
    expect(described_class.run(3549)).to eq 'MMMDXLIX'
  end

  it 'must be DCCLXXXIX when convert 789 to roman' do
    expect(described_class.run(789)).to eq 'DCCLXXXIX'
  end
end

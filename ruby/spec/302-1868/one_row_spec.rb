# frozen_string_literal: true

require_relative '../../challenges/302-1868/index'

RSpec.describe OneRow do
  it 'throws an error when layout is invalid' do
    expect do
      described_class.run(
        words: %w[candy fart pop Zelda flag typewriter],
        layout: :fake
      )
    end.to raise_error(StandardError, 'Invalid layout.')
  end

  it 'gets words written with only one row with QWERTY layout' do
    expect(described_class.run(words: %w[candy fart pop Zelda flag typewriter])).to eq %w[pop flag typewriter]
  end

  it 'with only one row with DVORAK layout' do
    expect(described_class.run(words: %w[cfrp fart pop hideout flag JVM], layout: :dvorak)).to eq %w[cfrp hideout JVM]
  end

  it 'gets words written with only one row with COLEMAK layout' do
    expect(described_class.run(words: %w[candy fluffy hardstone Zelda BMX typewriter],
                               layout: :colemak)).to eq %w[fluffy hardstone BMX]
  end
end

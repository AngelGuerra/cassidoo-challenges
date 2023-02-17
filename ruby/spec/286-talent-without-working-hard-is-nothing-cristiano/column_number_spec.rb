# frozen_string_literal: true

require_relative '../../challenges/286-talent-without-working-hard-is-nothing-cristiano/index'

RSpec.describe ColumnNumber do
  it 'test with invalid length must thrown an error' do
    expect { described_class.run('HO1') }.to raise_error(StandardError, 'Column can only contain chars from A to Z.')
  end

  it 'test with columna A must be 1' do
    expect(described_class.run('A')).to be 1
  end

  it 'test with column B must be 2' do
    expect(described_class.run('B')).to be 2
  end

  it 'test with column c must be 3' do
    expect(described_class.run('c')).to be 3
  end

  it 'test with column z must be 26' do
    expect(described_class.run('z')).to be 26
  end

  it 'test with column AA must be 27' do
    expect(described_class.run('aA')).to be 27
  end

  it 'test with column AZ must be 52' do
    expect(described_class.run('AZ')).to be 52
  end

  it 'test with column iv must be 256' do
    expect(described_class.run('iv')).to be 256
  end

  it 'test with column AAA must be 703' do
    expect(described_class.run('aaa')).to be 703
  end

  it 'test with column XFD must be 16384' do
    expect(described_class.run('XFD')).to be 16_384
  end
end

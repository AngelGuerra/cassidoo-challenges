# frozen_string_literal: true

require_relative '../../challenges/280-love-is-all-we-have-the-only-way-that-each-can/index'

# Talk is cheap, show me the code
RSpec.describe ReplaceZeros do
  it 'must raise StandardError when try to replace empty string' do
    expect { described_class.run('') }.to raise_error(StandardError)
  end

  it "must raise StandardError when input doesn't contain only numbers" do
    expect { described_class.run('angel00123456') }.to raise_error(StandardError)
  end

  it "must be 1234523623441 when input is '1234500362000440'" do
    expect(described_class.run('1234500362000440')).to be 1_234_523_623_441
  end

  it "must be 123452362344 when input is '123450036200044'" do
    expect(described_class.run('123450036200044')).to be 123_452_362_344
  end

  it "must be 12 when input is '000000000000'" do
    expect(described_class.run('000000000000')).to be 12
  end

  it "must be 123456789 when input is '123456789'" do
    expect(described_class.run('123456789')).to be 123_456_789
  end
end

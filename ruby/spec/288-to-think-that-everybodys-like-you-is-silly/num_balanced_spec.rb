# frozen_string_literal: true

require_relative '../../challenges/288-to-think-that-everybodys-like-you-is-silly/index'

RSpec.describe NumBalanced do
  it "'()' must return 0" do
    expect(described_class.run('()')).to be(0)
  end

  it "'(()' must return 1" do
    expect(described_class.run('(()')).to be(1)
  end

  it "'))()))))()' must return 6" do
    expect(described_class.run('))()))))()')).to be(6)
  end

  it "')))))' must return 5" do
    expect(described_class.run(')))))')).to be(5)
  end
end

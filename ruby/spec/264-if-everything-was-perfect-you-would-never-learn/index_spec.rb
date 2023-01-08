# frozen_string_literal: true

require_relative "../../challenges/264-if-everything-was-perfect-you-would-never-learn/index"

# Talk is cheap, show me the code
RSpec.describe FromToGenerator do
  it "must raise StandardError when from is greather than to" do
    expect do
      FromToGenerator.from_to(7, 5)
    end.to raise_error(StandardError, "From cannot be greather than to.")
  end

  it "test generator from 5 to 7 and StopIteration exception" do
    generator = FromToGenerator.from_to(5, 7)

    expect(generator.call).to be 5
    expect(generator.call).to be 6
    expect(generator.call).to be 7
    expect { generator.call }.to raise_error(StopIteration)
  end

  it "test generator from -100 to 100 and StopIteration exception" do
    generator = FromToGenerator.from_to(-100, 100)

    (-100..100).each do |expected|
      expect(generator.call).to be expected
    end

    expect { generator.call }.to raise_error(StopIteration)
  end
end

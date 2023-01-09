# frozen_string_literal: true

require_relative "../../challenges/282-what-you-do-every-day-matters-more-than-what-you/index"

# Talk is cheap, show me the code
RSpec.describe SumEveryOther do
  it "test example 548915381 must be 26" do
    expect(SumEveryOther.run(548_915_381)).to be 26
  end

  it "test example 10 must be 0" do
    expect(SumEveryOther.run(10)).to be 0
  end

  it "test example 1010.11 must be 1" do
    expect(SumEveryOther.run(1010.11)).to be 1
  end

  it "test example 98763.4604 must be 18" do
    expect(SumEveryOther.run(98_763.4604)).to be 18
  end
end

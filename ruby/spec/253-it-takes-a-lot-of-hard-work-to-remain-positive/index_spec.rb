# frozen_string_literal: true

require_relative "../../challenges/253-it-takes-a-lot-of-hard-work-to-remain-positive/index"

# Talk is cheap, show me the code
RSpec.describe PreviousFibonacci do
  it "test non Fibonacci number (4) must return -1" do
    expect(PreviousFibonacci.run(4)).to be(-1)
  end

  it "test non Fibonacci number (418) must return -1" do
    expect(PreviousFibonacci.run(418)).to be(-1)
  end

  it "Fibonnacci number prior to 8 must be 5" do
    expect(PreviousFibonacci.run(8)).to be(5)
  end

  it "Fibonnacci number prior to 144 must be 89" do
    expect(PreviousFibonacci.run(144)).to be(89)
  end

  it "Fibonnacci number prior to 1597 must be 987" do
    expect(PreviousFibonacci.run(1597)).to be(987)
  end
end

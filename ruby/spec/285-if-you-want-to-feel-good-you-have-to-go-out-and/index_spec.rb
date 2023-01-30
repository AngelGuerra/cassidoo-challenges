# frozen_string_literal: true

require_relative "../../challenges/285-if-you-want-to-feel-good-you-have-to-go-out-and/index"

# Talk is cheap, show me the code
RSpec.describe GenerateArrays do
  it "test with non positive length must thrown an error" do
    expect { GenerateArrays.run(0) }.to raise_error(StandardError, "Length must be a positive number.")
  end

  it "test with array length = 4" do
    expect(GenerateArrays.run(4)).to eq [[1], [1, 2], [1, 2, 3], [1, 2, 3, 4]]
  end

  it "test with array length = 1" do
    expect(GenerateArrays.run(1)).to eq [[1]]
  end
end

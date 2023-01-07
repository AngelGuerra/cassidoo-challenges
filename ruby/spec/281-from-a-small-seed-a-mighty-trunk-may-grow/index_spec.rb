# frozen_string_literal: true

require_relative "../../challenges/281-from-a-small-seed-a-mighty-trunk-may-grow/index"

# Talk is cheap, show me the code
RSpec.describe MaxSubarray do
  it "must raise StandardError when length is greather than array length" do
    expect { MaxSubarray.run([1, 2, 3], 4) }.to raise_error(StandardError)
  end

  it "example [-4, 2, -5, 1, 2, 3, 6, -5, 1], 4 must be [1, 2, 3, 6]" do
    expect(MaxSubarray.run([-4, 2, -5, 1, 2, 3, 6, -5, 1], 4)).to eq [1, 2, 3, 6]
  end

  it "example [1, 2, 0, 5], 2 must be [0, 5]" do
    expect(MaxSubarray.run([1, 2, 0, 5], 2)).to eq [0, 5]
  end
end

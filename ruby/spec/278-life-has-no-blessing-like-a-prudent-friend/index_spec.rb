# frozen_string_literal: true

require_relative "../../challenges/278-life-has-no-blessing-like-a-prudent-friend/index"

# Talk is cheap, show me the code
RSpec.describe RectangleSum do
  it "must raise StandardError when reference array is not square" do
    expect do
      RectangleSum.new [6, 9, -7, 3, 8]
    end.to raise_error(StandardError, "The array must have length in order to become a square.")
  end

  it "[1, 1, 4, 4] must be 20" do
    rectangle_sum = RectangleSum.new [1, 2, 3, 4, 4, 3, 2, 1, 1, 2, 3, 4, 4, 3, 2, 1]
    expect(rectangle_sum.run([1, 1, 4, 4])).to be 20
  end
end

RSpec.describe RectangleSum do
  before(:each) do
    @rectangle_sum = RectangleSum.new [6, 9, -7, 3, 8, -1, -6, -4, 2, -7, 7, -7, -1, 4, 7, 9]
  end

  it "must raise StandardError when input array length is not 4" do
    expect do
      @rectangle_sum.run [6, 9, -7]
    end.to raise_error(StandardError, "A rectangle has only 4 corners.")
  end

  it "must raise StandardError when input array contains invalid number" do
    expect do
      @rectangle_sum.run [-1, 8, 3, 52]
    end.to raise_error(StandardError, "All corners must be inside the reference array.")
  end

  it "must raise StandardError when array is not a rectangle 01" do
    expect do
      @rectangle_sum.run [-1, 8, 3, 2]
    end.to raise_error(StandardError, "Not enough coordinates have been found to create the rectangle.")
  end

  it "must raise StandardError when array is not a rectangle 02" do
    expect do
      @rectangle_sum.run [6, 9, 8, -4]
    end.to raise_error(StandardError, "No rectangle has been found with the given coordinates.")
  end

  it "[-1, 8, -7, 2] must be 2" do
    expect(@rectangle_sum.run([-1, 8, -7, 2])).to be 2
  end

  it "[6, 3, 2, -7] must be 3" do
    expect(@rectangle_sum.run([6, 3, 2, -7])).to be 3
  end

  it "[6, 3, 2, -7] must be 3" do
    expect(@rectangle_sum.run([6, 3, 2, -7])).to be 3
  end
end

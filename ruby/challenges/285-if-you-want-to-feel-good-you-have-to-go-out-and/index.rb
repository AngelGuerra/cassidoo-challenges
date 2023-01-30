# frozen_string_literal: true

# Given a positive integer, generate an array in which every element is an array that goes from 1 to the index of
# that array.
#
# Example
#
# ```js
# generateArrays(4); // [[1], [1, 2], [1, 2, 3], [1, 2, 3, 4]]
# generateArrays(1); // [[1]]
# ```
module GenerateArrays
  def self.run(length)
    raise "Length must be a positive number." unless length.positive?

    length.times.map { |idx| (1..(idx + 1)).to_a }
  end
end

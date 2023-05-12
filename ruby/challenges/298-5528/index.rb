# frozen_string_literal: true

# Given a non-empty array containing only non-negative integers, return the list with trailing and leading zeroes
# removed.
#
# Example
#
# ```js
# removeZeroes([0, 0, 0, 3, 1, 4, 1, 5, 9, 0, 0, 0, 0]); // [3, 1, 4, 1, 5, 9]
# removeZeroes([0, 0, 0]); // []
# removeZeroes([8]); // [8]
# ```
module RemoveZeroes
  class << self
    def run(arr)
      raise 'Array cannot be empty.' if arr.empty?

      arr.reverse.drop_while(&:zero?).reverse.drop_while(&:zero?)
    end
  end
end

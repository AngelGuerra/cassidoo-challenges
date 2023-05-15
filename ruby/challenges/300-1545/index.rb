# frozen_string_literal: true

# Write a function to find out whether the binary representation of a number is palindrome or not.
#
# Example
# ```js
# binaryPal(5); // true
# binaryPal(10); // false
# ```
module BinaryPal
  class << self
    def run(number)
      raise 'Number must be Natural.' if number.negative?
      raise 'Number must be Integer.' unless number.is_a? Integer

      binary = number.to_s(2)
      binary == binary.reverse
    end
  end
end

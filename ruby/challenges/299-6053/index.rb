# frozen_string_literal: true

# Sum the [odd-square numbers](https://oeis.org/A016754) less than a given integer _n_.
#
# Example
#
# ```js
# oddSquareSum(1); // 0
# oddSquareSum(2); // 1
# oddSquareSum(9); // 1
# oddSquareSum(10); // 10
# oddSquareSum(44); // 35
# ```
module OddSquareSum
  class << self
    def run(number)
      return 0 if number <= 1

      (1..number).to_a.select(&:odd?).map { |current| current**2 }.select { |square| square < number }.sum
    end
  end
end

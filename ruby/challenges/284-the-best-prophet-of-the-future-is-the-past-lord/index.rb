# frozen_string_literal: true

# **You are given a list of positive integers which represents some range of integers which has been truncated. Find
# the missing bits, insert ellipses to show that that part has been truncated, and print it.** If the consecutive
# values differ by exactly two, then insert the missing value.
#
# Example
# ```js
# missingBits([1, 2, 3, 4, 20, 21, 22, 23]); // "[1,2,3,4,...,20,21,22,23]"
# missingBits([1, 2, 3, 5, 6]); // "[1,2,3,4,5,6]"
# missingBits([1, 3, 20, 27]); // "[1,2,3,...,20,...,27]"
# ```
module MissingBits
  RANGE_FILL = '...'

  class << self
    def run(bits, gap = 2)
      result = bits.sort.inject([]) { |acc, current| reducer(acc, current, gap) }

      "[#{result.join(', ')}]"
    end

    private

    def reducer(acc, current, gap)
      prev = acc.last

      return [*acc, current] if prev.nil? || current - prev == 1

      return [*acc, RANGE_FILL, current] if current - prev > gap

      acc + gap.times.reverse_each.map { |idx| current - idx }
    end
  end
end

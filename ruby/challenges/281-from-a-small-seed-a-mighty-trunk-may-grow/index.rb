# frozen_string_literal: true

# Given an array of integers arr and an integer n, return a subarray of arr of length n where the sum is the largest.
# Make sure you maintain the order of the original array, and if n is greater than arr.length, you can choose what
# you want to return.
#
# Example
# ```js
# maxSubarray([-4, 2, -5, 1, 2, 3, 6, -5, 1], 4); // [1,2,3,6]
# maxSubarray([1, 2, 0, 5], 2); // [0,5]
# ```
module MaxSubarray
  def self.run(arr, length)
    raise "The given length exceeds the length of the array" if length > arr.length

    cons = arr.each_cons(length).to_a
    sums = cons.collect(&:sum)
    cons[sums.index(sums.max)]
  end
end

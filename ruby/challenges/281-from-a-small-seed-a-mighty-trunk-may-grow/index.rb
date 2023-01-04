# frozen_string_literal: true

# See ./README.md

def max_subarray(arr, length)
  raise 'The given length exceeds the length of the array' if length > arr.length

  cons = arr.each_cons(length).to_a
  sums = cons.collect(&:sum)
  cons[sums.index(sums.max)]
end

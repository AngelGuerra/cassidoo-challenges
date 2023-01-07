# frozen_string_literal: true

# Given a string of any length which contains only digits from 0 to 9, replace each consecutive run of the digit 0
# with its length.
#
# Example
# ```js
# replaceZeros("1234500362000440"); // 1234523623441
# replaceZeros("123450036200044"); // 123452362344
# replaceZeros("000000000000"); // 12
# replaceZeros("123456789"); // 123456789
# ```
module ReplaceZeros
  def self.run(str)
    raise "Input must contain only digits." unless /^\d+$/.match?(str)

    str.gsub(/0+/, &:length).to_i
  end
end

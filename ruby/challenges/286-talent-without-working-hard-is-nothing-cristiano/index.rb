# frozen_string_literal: true

# Spreadsheet programs often use the [A1 Reference Style](https://learn.microsoft.com/en-us/office/troubleshoot/excel/numeric-columns-and-rows#the-a1-reference-style)
# to refer to columns. Given a column name in this style, return its column number.
#
# Example of column names to their numbers:
#
# ```
# A -> 1
# B -> 2
# C -> 3
# // etc
# Z -> 26
# AA -> 27
# AB -> 28
# // etc
# AAA -> 703
# ```
module ColumnNumber
  ALPHABET_LENGTH = 26
  CHAR_CODE_DIFF = 64

  class << self
    def run(column_name)
      column_name_upcased = column_name.upcase

      raise 'Column can only contain chars from A to Z.' unless /^[A-Z]+$/.match?(column_name_upcased)

      column_name_upcased.reverse.each_char.with_index.inject(0) { |memo, (char, idx)| memo + char_value(char, idx) }
    end

    private

    def char_value(char, loop)
      (char.ord - CHAR_CODE_DIFF) * (ALPHABET_LENGTH**loop)
    end
  end
end

# frozen_string_literal: true

# Given a string of parenthesis, return the number of parenthesis you need to add to the string in order for it to be
# balanced.
#
# Example
#
# ```js
# numBalanced(`()`); // 0
# numBalanced(`(()`); // 1
# numBalanced(`))()))))()`); // 6
# numBalanced(`)))))`); // 5
# ```
module NumBalanced
  def self.run(parenthesis)
    parenthesis.chars.inject(0) { |memo, char| memo + (char == ')' ? 1 : -1) }.abs
  end
end

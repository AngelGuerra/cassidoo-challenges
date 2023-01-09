# frozen_string_literal: true

# Given a number, sum every second digit in that number.
#
# Example
# ```js
# sumEveryOther(548915381); // 26 -> 4+9+5+8
# sumEveryOther(10); // 0
# sumEveryOther(1010.11) // 1 -> 0+0+1
# ```
module SumEveryOther
  def self.run(number)
    number
      .to_s
      .gsub(/\D/, "")
      .scan(/\d(\d)/)
      .map { |match| match.first.to_i }
      .inject(0, :+)
  end
end

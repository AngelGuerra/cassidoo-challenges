# frozen_string_literal: true

# Given a Fibonacci number, give the previous Fibonacci number. If the number given is not a Fibonacci number,
# return -1.
module PreviousFibonacci
  class << self
    def run(number)
      return - 1 unless fibonacci? number

      get_previous(number)
    end

    private

    # `number` is a Fibonacci number if and only if ( 5 * N^2 + 4 ) or ( 5 * N^2 – 4 ) is a perfect square.
    def fibonacci?(number)
      option_a = Math.sqrt((((number**2) * 5) + 4))
      option_b = Math.sqrt((((number**2) * 5) - 4))

      (option_a % 1).zero? || (option_b % 1).zero?
    end

    # The ratio of two adjacent numbers in the Fibonacci series rapidly approaches ((1 + sqrt(5)) / 2). So if N is
    # divided by ((1 + sqrt(5)) / 2) and then rounded, the resultant number will be the previous Fibonacci number.
    def get_previous(number)
      (number / ((Math.sqrt(5) + 1) / 2)).round
    end
  end
end

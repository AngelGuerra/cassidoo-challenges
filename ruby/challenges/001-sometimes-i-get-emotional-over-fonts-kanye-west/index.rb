# frozen_string_literal: true

# Write a function that takes in a number from 1 to 1000 and returns that number in Roman Numerals.
module IntegerToRoman
  BASE_VALUES = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4,
                  I: 1 }.freeze

  class << self
    def run(number)
      raise StandardError('The number must be between 0 and 3,999.') if number <= 0 || number >= 4000

      generate_roman(number)
    end

    private

    def generate_roman(number, result = '')
      return result if number.zero?

      current_key, current_value = BASE_VALUES.find { |(_key, value)| value <= number }

      generate_roman(number - current_value, result + current_key.to_s)
    end
  end
end

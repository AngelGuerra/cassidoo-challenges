# frozen_string_literal: true

# Write a function that takes in two strings and returns true if they are anagrams.
module Anagrams
  class << self
    def run(str_a, str_b)
      str_a_as_array = clean_string_and_cast_to_array(str_a)
      str_b_as_array = clean_string_and_cast_to_array(str_b)

      str_a_as_array == str_b_as_array
    end

    private

    def clean_string_and_cast_to_array(str)
      str.downcase.gsub(/[^a-z]/, '').chars.sort.join
    end
  end
end

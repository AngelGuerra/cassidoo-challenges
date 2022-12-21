# frozen_string_literal: true

# See ./README.md

def clean_string_and_cast_to_array(str)
  str.downcase.gsub(/[^a-z]/, '').split('').sort.join
end

def are_anagrams(str_a, str_b)
  str_a_as_array = clean_string_and_cast_to_array(str_a)
  str_b_as_array = clean_string_and_cast_to_array(str_b)

  str_a_as_array == str_b_as_array
end

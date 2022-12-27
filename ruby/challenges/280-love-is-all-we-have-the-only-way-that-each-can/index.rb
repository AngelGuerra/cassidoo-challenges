# frozen_string_literal: true

# See ./README.md

def replace_zeros(str)
  raise 'Input must contain only digits.' unless /^\d+$/.match?(str)

  str.gsub(/0+/, &:length).to_i
end

# frozen_string_literal: true

# See ./README.md
class AfterVowelCapitalizer
  def initialize(str)
    @str = str
  end

  def with_regex
    @str.gsub(/(?<=[aeiou])(!?\s?)([^aeiou]{1})/, &:upcase)
  end

  def without_regex
    uppercase_it = false

    @str.split('').map do |c|
      next ' ' if c.strip.empty?

      if vowel? c
        uppercase_it = true
        next c
      end

      next c unless uppercase_it

      uppercase_it = false
      next c.upcase
    end.join
  end

  private

  def vowel?(char)
    %w[a e i o u].include? char
  end
end

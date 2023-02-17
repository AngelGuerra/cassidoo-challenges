# frozen_string_literal: true

# Given a string, make every consonant after a vowel uppercase. Can you do this with and without regex?
#
# Example
# ```js
# capitalAfterVowel("hello world"); // "heLlo WoRld"
# capitalAfterVowel("xaabeuekadii"); // "xaaBeueKaDii"
# ```
class AfterVowelCapitalizer
  attr_reader :str

  def initialize(str)
    @str = str
  end

  def with_regex
    @str.gsub(/(?<=[aeiou])(!?\s?)([^aeiou]{1})/, &:upcase)
  end

  def without_regex
    uppercase_it = false

    @str.chars.map do |c|
      (char, uppercase_it) = convert(c, uppercase_it)

      char
    end.join
  end

  private

  def vowel?(char)
    %w[a e i o u].include? char
  end

  def convert(char, uppercase_it)
    return [' ', uppercase_it] if char.strip.empty?
    return [char, true] if vowel? char
    return [char, uppercase_it] unless uppercase_it

    [char.upcase, false]
  end
end

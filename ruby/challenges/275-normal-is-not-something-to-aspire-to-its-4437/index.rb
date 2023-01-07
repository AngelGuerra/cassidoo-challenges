# frozen_string_literal: true

# Write a function that takes a string of slashes (\ and /) and returns all of those slashes drawn downwards in a
# line connecting them.
#
# Example
# ```js
# verticalSlashes('\\\//\/\\');
# // \
# //  \
# //   \
# //   /
# //  /
# //  \
# //  /
# //  \
# //   \
# verticalSlashes('\\\\');
# // \
# //  \
# //   \
# //    \
# ```
module VerticalSlashes
  def self.run(slashes)
    normalize_spaces(generate_chars_hash(slashes)).map do |item|
      next item[:char] if item[:spaces].zero?

      item[:char].dup.prepend(" " * item[:spaces])
    end.join("\n")
  end

  def self.generate_chars_hash(slashes)
    spaces = 0
    prev = slashes[0]
    slashes.chars.map do |char|
      if prev == char
        char == "/" ? spaces -= 1 : spaces += 1
      end

      prev = char

      { char:, spaces: }
    end
  end

  def self.normalize_spaces(arr)
    min = arr.min { |a, b| a[:spaces] <=> b[:spaces] }[:spaces]

    return arr if min.zero?

    arr.map do |hash|
      min.positive? ? hash[:spaces] -= min : hash[:spaces] += min.abs

      hash
    end
  end
end

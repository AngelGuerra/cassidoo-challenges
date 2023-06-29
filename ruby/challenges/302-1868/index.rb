# frozen_string_literal: true

# **Given an array of words, return the words that can be typed using letters of only one row on a keyboard.** For
# bonus points, include the option for a user to pick the type of keyboard they are using (ANSI, ISO, etc), and/or
# give options for how many/which rows are allowed!
#
# Example
#
# ```js
# oneRow(["candy", "fart", "pop", "Zelda", "flag", "typewriter"]); // ['pop', 'flag', 'typewriter']
# ```
module OneRow
  class << self
    KEYBOARD_LAYOUTS = {
      querty: %w[qwertyuiop asdfghjkl zxcvbnm],
      dvorak: %w[pyfgcrl aoeuidhtns qjkxbmwvz],
      colemak: %w[qwfpgjluy arstdhneio zxcvbkm]
    }.freeze

    def run(words:, layout: :querty)
      raise 'Invalid layout.' unless KEYBOARD_LAYOUTS.key?(layout)

      words.filter { |word| KEYBOARD_LAYOUTS[layout].any? { |permitted_chars| check_row(row: word, permitted_chars:) } }
    end

    private

    def check_row(row:, permitted_chars:)
      row.match?(/^[#{permitted_chars}]*$/i)
    end
  end
end

# frozen_string_literal: true

# Using the rules of [Wordle](https://www.powerlanguage.co.uk/wordle/), given a guessWord and a solutionWord, return a
# set of emojis returned from the guessWord.
#
# Example
# ```js
# let solutionWord = "fudge";
# wordleGuess("reads", solutionWord); // "⬛🟨⬛🟨⬛"
# wordleGuess("lodge", solutionWord); // "⬛⬛🟩🟩🟩"
# ```
class Wordle
  attr_reader :solution, :cleaned_solution

  def initialize(solution)
    raise StandardError("Solution must be a valid 5-letter word.") if solution.length != 5

    @solution = solution
    @cleaned_solution = @solution.dup
  end

  def guess(input)
    raise StandardError("Input must be a valid 5-letter word.") if input.length != 5

    return "🟩🟩🟩🟩🟩" if @solution == input

    find_coincidences(input.chars).map do |char|
      next "🟩" if char == "🟩"

      @cleaned_solution[@cleaned_solution.index(char)] = " " and next "🟨" if @cleaned_solution.include?(char)

      "⬛"
    end.join
  end

  private

  def find_coincidences(chars)
    chars.map.with_index do |char, idx|
      if @cleaned_solution[idx] == char
        @cleaned_solution[idx] = " "

        next "🟩"
      end

      char
    end
  end
end

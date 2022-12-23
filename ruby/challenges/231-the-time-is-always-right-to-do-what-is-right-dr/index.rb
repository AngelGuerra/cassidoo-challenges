# frozen_string_literal: true

# See ./README.md
class Wordle
  def initialize(solution)
    raise StandardError('Solution must be a valid 5-letter word.') if solution.length != 5

    @solution = solution
  end

  def guess(input)
    raise StandardError('Input must be a valid 5-letter word.') if input.length != 5

    return '🟩🟩🟩🟩🟩' if @solution == input

    @cleaned_solution = @solution.dup

    find_coincidences(input.chars).map do |char|
      next '🟩' if char == '🟩'

      @cleaned_solution[@cleaned_solution.index(char)] = ' ' and next '🟨' if @cleaned_solution.include?(char)

      '⬛'
    end.join
  end

  private

  def find_coincidences(chars)
    chars.map.with_index do |char, idx|
      if @cleaned_solution[idx] == char
        @cleaned_solution[idx] = ' '

        next '🟩'
      end

      char
    end
  end
end

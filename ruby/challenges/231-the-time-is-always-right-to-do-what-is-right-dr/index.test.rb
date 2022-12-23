# frozen_string_literal: true

require 'minitest/autorun'
require_relative 'index'

# Talk is cheap, show me the code
class WordleTest < Minitest::Test
  def test_raises_error_if_invalid_solution
    assert_raises(StandardError) { Wordle.new 'fake' }
  end

  def test_raises_error_if_invalid_guess
    assert_raises(StandardError) do
      Wordle.new 'angel'
      wordle.guess('fake')
    end
  end

  def test_word_reads_with_solution_fudge
    wordle = Wordle.new 'fudge'
    assert_equal '⬛🟨⬛🟨⬛', wordle.guess('reads')
  end

  def test_word_deeds_with_solution_fudge
    wordle = Wordle.new 'fudge'
    assert_equal '🟨🟨⬛⬛⬛', wordle.guess('deeds')
  end

  def test_word_lodge_with_solution_fudge
    wordle = Wordle.new 'fudge'
    assert_equal '⬛⬛🟩🟩🟩', wordle.guess('lodge')
  end

  def test_full_coincidence
    wordle = Wordle.new 'fudge'
    assert_equal '🟩🟩🟩🟩🟩', wordle.guess('fudge')
  end

  def test_word_poppy_with_solution_perps
    wordle = Wordle.new 'perps'
    assert_equal '🟩⬛⬛🟩⬛', wordle.guess('poppy')
  end

  def test_word_eaeee_with_solution_perps
    wordle = Wordle.new 'perps'
    assert_equal '🟨⬛⬛⬛⬛', wordle.guess('eaeee')
  end

  def test_word_erpsp_with_solution_perps
    wordle = Wordle.new 'perps'
    assert_equal '🟨🟨🟨🟨🟨', wordle.guess('erpsp')
  end
end

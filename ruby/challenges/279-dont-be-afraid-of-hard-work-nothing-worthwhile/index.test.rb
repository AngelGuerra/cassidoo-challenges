# frozen_string_literal: true

require 'minitest/autorun'
require_relative 'index'

# Talk is cheap, show me the code
class AfterVowelCapitalizerTest < Minitest::Test
  def test_with_regex_example01
    capitalizer = AfterVowelCapitalizer.new 'hello world'
    assert_equal 'heLlo WoRld', capitalizer.with_regex
  end

  def test_with_regex_example02
    capitalizer = AfterVowelCapitalizer.new 'xaabeuekadii'
    assert_equal 'xaaBeueKaDii', capitalizer.with_regex
  end

  def test_without_regex_example01
    capitalizer = AfterVowelCapitalizer.new 'hello world'
    assert_equal 'heLlo WoRld', capitalizer.without_regex
  end

  def test_without_regex_example02
    capitalizer = AfterVowelCapitalizer.new 'xaabeuekadii'
    assert_equal 'xaaBeueKaDii', capitalizer.without_regex
  end
end

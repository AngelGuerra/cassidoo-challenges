# frozen_string_literal: true

# **Write a program that prints the amount of characters its source has in English words.** So a program that is 44
# characters long would output “forty four” and a program that is 108 characters long would output “one hundred eight”.
module HowManyCharactersDoYouHave
  LESS_THAN_TWENTY = %w[
    zero
    one
    two
    three
    four
    five
    six
    seven
    eight
    nine
    ten
    eleven
    twelve
    thirteen
    fourteen
    fifteen
    sixteen
    seventeen
    eighteen
    nineteen
  ].freeze

  TENTHS_LESS_THAN_HUNDRED = %w[
    zero
    ten
    twenty
    thirty
    forty
    fifty
    sixty
    seventy
    eighty
    ninety
  ].freeze

  class << self
    def run
      generate_words(
        size: File.read("#{__dir__}/index.rb").length
      )
    end

    private

    def generate_words(size:, words: [])
      return words.join(' ') if size.zero?
      return generate_words_less_than20(size:, words:) if size < 20
      return generate_words_less_than100(size:, words:) if size < 100
      return generate_words_less_than1000(size:, words:) if size < 1000

      generate_words_less_than10000(size:, words:)
    end

    def generate_words_less_than20(size:, words:)
      words << LESS_THAN_TWENTY[size]
      generate_words(size: 0, words:)
    end

    def generate_words_less_than100(size:, words:)
      words << TENTHS_LESS_THAN_HUNDRED[(size / 10).floor]
      generate_words(size: size % 10, words:)
    end

    def generate_words_less_than1000(size:, words:)
      words << "#{(size / 100).floor} hundred"
      generate_words(size: size % 100, words:)
    end

    def generate_words_less_than10000(size:, words:)
      words << "#{(size / 1000).floor} thousand"
      generate_words(size: size % 1000, words:)
    end
  end
end

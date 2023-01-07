# frozen_string_literal: true

require_relative "../../challenges/231-the-time-is-always-right-to-do-what-is-right-dr/index"

# Talk is cheap, show me the code
RSpec.describe Wordle do
  it "must raise StandardError when solution is invalid" do
    expect { Wordle.new "fake" }.to raise_error(StandardError)
  end

  it "must raise StandardError when guess is invalid" do
    wordle = Wordle.new "angel"
    expect { wordle.guess("fake") }.to raise_error(StandardError)
  end
end

RSpec.describe Wordle do
  before(:each) do
    @wordle = Wordle.new "fudge"
  end

  it "word 'reads' with solution 'fudge' must be '⬛🟨⬛🟨⬛'" do
    expect(@wordle.guess("reads")).to eq "⬛🟨⬛🟨⬛"
  end

  it "word 'deeds' with solution 'fudge' must be '🟨🟨⬛⬛⬛'" do
    expect(@wordle.guess("deeds")).to eq "🟨🟨⬛⬛⬛"
  end

  it "word 'lodge' with solution 'fudge' must be '⬛⬛🟩🟩🟩'" do
    expect(@wordle.guess("lodge")).to eq "⬛⬛🟩🟩🟩"
  end

  it "word 'fudge' with solution 'fudge' must be '🟩🟩🟩🟩🟩'" do
    expect(@wordle.guess("fudge")).to eq "🟩🟩🟩🟩🟩"
  end
end

RSpec.describe Wordle do
  before(:each) do
    @wordle = Wordle.new "perps"
  end

  it "word 'poppy' with solution 'perps' must be '🟩⬛⬛🟩⬛'" do
    expect(@wordle.guess("poppy")).to eq "🟩⬛⬛🟩⬛"
  end

  it "word 'eaeee' with solution 'perps' must be '🟨⬛⬛⬛⬛'" do
    expect(@wordle.guess("eaeee")).to eq "🟨⬛⬛⬛⬛"
  end

  it "word 'erpsp' with solution 'perps' must be '🟨🟨🟨🟨🟨'" do
    expect(@wordle.guess("erpsp")).to eq "🟨🟨🟨🟨🟨"
  end
end

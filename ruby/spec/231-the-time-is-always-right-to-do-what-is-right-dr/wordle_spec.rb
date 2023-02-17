# frozen_string_literal: true

require_relative '../../challenges/231-the-time-is-always-right-to-do-what-is-right-dr/index'

# Talk is cheap, show me the code
RSpec.describe Wordle do
  context 'when we want to test errors' do
    it 'must raise StandardError when solution is invalid' do
      expect { described_class.new 'fake' }.to raise_error(StandardError)
    end

    it 'must raise StandardError when guess is invalid' do
      wordle = described_class.new 'angel'
      expect { wordle.guess('fake') }.to raise_error(StandardError)
    end
  end

  context "when we test with 'fudge' word" do
    let(:wordle) { described_class.new 'fudge' }

    it "word 'reads' must be '⬛🟨⬛🟨⬛'" do
      expect(wordle.guess('reads')).to eq '⬛🟨⬛🟨⬛'
    end

    it "word 'deeds' must be '🟨🟨⬛⬛⬛'" do
      expect(wordle.guess('deeds')).to eq '🟨🟨⬛⬛⬛'
    end

    it "word 'lodge' must be '⬛⬛🟩🟩🟩'" do
      expect(wordle.guess('lodge')).to eq '⬛⬛🟩🟩🟩'
    end

    it "word 'fudge' must be '🟩🟩🟩🟩🟩'" do
      expect(wordle.guess('fudge')).to eq '🟩🟩🟩🟩🟩'
    end
  end

  context "when we play with 'perps' word" do
    let(:wordle) { described_class.new 'perps' }

    it "word 'poppy' must be '🟩⬛⬛🟩⬛'" do
      expect(wordle.guess('poppy')).to eq '🟩⬛⬛🟩⬛'
    end

    it "word 'eaeee' must be '🟨⬛⬛⬛⬛'" do
      expect(wordle.guess('eaeee')).to eq '🟨⬛⬛⬛⬛'
    end

    it "word 'erpsp' must be '🟨🟨🟨🟨🟨'" do
      expect(wordle.guess('erpsp')).to eq '🟨🟨🟨🟨🟨'
    end
  end
end

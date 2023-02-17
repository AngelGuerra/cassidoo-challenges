# frozen_string_literal: true

require_relative '../../challenges/279-dont-be-afraid-of-hard-work-nothing-worthwhile/index'

# Talk is cheap, show me the code
RSpec.describe AfterVowelCapitalizer do
  context "when test with word 'hello world'" do
    let(:capitalizer) { described_class.new 'hello world' }

    it "with regex must be 'heLlo WoRld'" do
      expect(capitalizer.with_regex).to eq 'heLlo WoRld'
    end

    it "without regex must be 'heLlo WoRld'" do
      expect(capitalizer.without_regex).to eq 'heLlo WoRld'
    end
  end

  context "when test with word 'xaabeuekadii'" do
    let(:capitalizer) { described_class.new 'xaabeuekadii' }

    it "with regex must be 'xaaBeueKaDii'" do
      expect(capitalizer.with_regex).to eq 'xaaBeueKaDii'
    end

    it "without regex must be 'xaaBeueKaDii'" do
      expect(capitalizer.without_regex).to eq 'xaaBeueKaDii'
    end
  end
end

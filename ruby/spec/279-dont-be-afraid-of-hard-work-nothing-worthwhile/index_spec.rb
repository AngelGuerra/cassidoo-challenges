# frozen_string_literal: true

require_relative "../../challenges/279-dont-be-afraid-of-hard-work-nothing-worthwhile/index"

# Talk is cheap, show me the code
RSpec.describe AfterVowelCapitalizer do
  before(:each) do
    @capitalizer = AfterVowelCapitalizer.new "hello world"
  end

  it "'hello world' capitalized with regex must be 'heLlo WoRld'" do
    expect(@capitalizer.with_regex).to eq "heLlo WoRld"
  end

  it "'hello world' capitalized without regex must be 'heLlo WoRld'" do
    expect(@capitalizer.without_regex).to eq "heLlo WoRld"
  end
end

RSpec.describe AfterVowelCapitalizer do
  before(:each) do
    @capitalizer = AfterVowelCapitalizer.new "xaabeuekadii"
  end

  it "'xaabeuekadii' capitalized with regex must be 'xaaBeueKaDii'" do
    expect(@capitalizer.with_regex).to eq "xaaBeueKaDii"
  end

  it "'xaabeuekadii' capitalized without regex must be 'xaaBeueKaDii'" do
    expect(@capitalizer.without_regex).to eq "xaaBeueKaDii"
  end
end

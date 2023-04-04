# frozen_string_literal: true

require_relative '../../challenges/294-6/index'

RSpec.describe HowManyCharactersDoYouHave do
  it 'must return the exact number of characters' do
    expect(described_class.run).to eq('1 thousand 8 hundred eight')
  end
end

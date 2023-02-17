# frozen_string_literal: true

require_relative '../../challenges/264-if-everything-was-perfect-you-would-never-learn/index'

# Talk is cheap, show me the code
RSpec.describe FromToGenerator do
  it 'must raise StandardError when from is greather than to' do
    expect do
      described_class.from_to(7, 5)
    end.to raise_error(StandardError, 'From cannot be greather than to.')
  end

  context 'when generator is from -100 to 100' do
    let(:generator) { described_class.from_to(-100, 100) }

    it 'must generate correct output' do
      (-100..100).each do |expected|
        expect(generator.call).to be expected
      end
    end

    it('must raise a StopItertion exception') do
      (-100..100).each { |_iteration| generator.call }
      expect { generator.call }.to raise_error(StopIteration)
    end
  end
end

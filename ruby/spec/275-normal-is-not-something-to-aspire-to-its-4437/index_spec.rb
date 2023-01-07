# frozen_string_literal: true

require_relative "../../challenges/275-normal-is-not-something-to-aspire-to-its-4437/index"

# Talk is cheap, show me the code
RSpec.describe VerticalSlashes do
  it "test output with //// input" do
    expected = <<~HEREDOC.chomp
         /
        /
       /
      /
    HEREDOC

    expect(VerticalSlashes.run("////")).to eq expected
  end
  it "test output with \\\\\\\\ input" do
    expected = <<~HEREDOC.chomp
      \\
       \\
        \\
         \\
    HEREDOC

    expect(VerticalSlashes.run("\\\\\\\\")).to eq expected
  end

  it 'test output with \\\\\\//\\/\\\\ input' do
    expected = <<~HEREDOC.chomp
      \\
       \\
        \\
        /
       /
       \\
       /
       \\
        \\
    HEREDOC
    expect(VerticalSlashes.run("\\\\\\//\\/\\\\")).to eq expected
  end
end

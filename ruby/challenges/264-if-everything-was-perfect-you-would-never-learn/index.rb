# frozen_string_literal: true

# Write a function fromTo that produces a generator, that will produce values in a range.
#
# Example
# ```js
# let gen = fromTo(5,7)
# gen(); // 5
# gen(); // 6
# gen(); // 7
# gen(); // undefined
# ```
module FromToGenerator
  def self.from_to(from, to)
    raise 'From cannot be greather than to.' if from > to

    enumerator = (from..to).to_enum(:each)

    -> { enumerator.next }
  end
end

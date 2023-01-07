# frozen_string_literal: true

# Given a 2D array n of integers, and an array m of four (4) coordinates that represent corners of a rectangle in n,
# return the sum of all of the numbers in the rectangle.
#
# Example
# ```js
# let n = [
#     6, 9, -7, 3,
#     8, -1, -6, -4,
#     2, -7, 7, -7,
#     -1, 4, 7, 9
# ];
# let m = [-1, 8, -7, 2];
# rectangleSum(n, m); // 2
# rectangleSum(n, [6, 3, 2, -7]); // 3
# ```
class RectangleSum
  attr_reader :haystack, :size

  def initialize(haystack)
    @haystack = haystack
    @size = Math.sqrt(@haystack.length)

    raise "The array must have length in order to become a square." unless (@size % 1).zero?
  end

  def run(rectangle)
    validate_input_rectangle(rectangle)

    possible_corners = get_possible_corners(rectangle)
    validate_possible_corners(possible_corners)

    rectangle_found = get_rectangle(possible_corners)
    validate_existence_of_rectangle(rectangle_found)

    get_final_indexes(rectangle_found).inject(0) { |acc, current| acc + @haystack[current] }
  end

  private

  def validate_input_rectangle(rectangle)
    raise "A rectangle has only 4 corners." if rectangle.length != 4
    raise "All corners must be inside the reference array." unless rectangle.all? { |item| @haystack.include?(item) }
  end

  def validate_possible_corners(possible_corners)
    raise "Not enough coordinates have been found to create the rectangle." if possible_corners.length < 2
  end

  def validate_existence_of_rectangle(rectangle)
    raise "No rectangle has been found with the given coordinates." if rectangle.empty?
  end

  def index_1d_to_2d(index)
    { col: (index % @size).to_i, row: (index / @size).floor }
  end

  def index_2d_to_1d(index)
    index[:col] + (@size * index[:row])
  end

  def get_all_coords_of(needle)
    get_all_indexes_of(needle).map do |index|
      index_1d_to_2d(index)
    end
  end

  def get_all_indexes_of(needle)
    @haystack.each_with_index.inject([]) do |acc, pair|
      element, index = pair

      element == needle ? acc.push(index) : acc
    end
  end

  def get_possible_corners(rectangle)
    rectangle.map { |item| get_all_coords_of(item) }
             .flatten
             .sort_by { |item| item[:col] }
             .group_by { |item| item[:col] }
             .reject { |_col, coords| coords.length < 2 }
             .transform_values { |values| values.map { |coords| coords[:row] }.uniq.sort }
  end

  def get_rectangle(possible_corners)
    return [] if possible_corners.length < 2

    first_col, first_rows = possible_corners.first
    possible_corners.delete first_col

    possible_corners.each do |col, rows|
      intersection = first_rows.intersection rows
      next if intersection.length < 2

      return generate_rectangle(first_col, col, intersection)
    end

    get_rectangle(possible_corners)
  end

  def generate_rectangle(col_a, col_b, intersection)
    [
      { col: col_a, row: intersection[0] },
      { col: col_a, row: intersection[1] },
      { col: col_b, row: intersection[0] },
      { col: col_b, row: intersection[1] }
    ]
  end

  def get_final_indexes(rectangle)
    cols, rows = rectangle.map { |point| point.values_at(:col, :row) }.transpose

    indexes = []
    (rows.min..rows.max).each do |row|
      (cols.min..cols.max).each do |col|
        indexes.push(index_2d_to_1d({ col:, row: }))
      end
    end

    indexes
  end
end

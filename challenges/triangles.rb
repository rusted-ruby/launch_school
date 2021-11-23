=begin

write a program to determine if a triangle is equilateral, isosceles or scalene.

equilateral has 3 sides, all the same langth
isosceles has two sides of same length
scalene has sides of different lentghts

all sides must be > 0 and the (sum of any two sides) > (third side)

based on the test cases, it looks like we create a triangle class, and pass in three sides
What are the methods?
=> kind - returns a string that tells us what kind of triangle we have
=> initialize, which will raise an ArgumentError for illegal triangles.
=end

class Triangle
  attr_reader :sides

  def initialize(s1, s2, s3)
    @sides = [s1, s2, s3]
    raise ArgumentError if invalid_sides?
  end

  def kind
    if number_of_equal_sides == 3
      "equilateral"
    elsif number_of_equal_sides == 2
      "isosceles"
    elsif number_of_equal_sides == 0
      "scalene"
    else
      "error"
    end
  end

  def number_of_equal_sides
    unique_value_array = sides.uniq
    unique_value_count = unique_value_array.size
    case unique_value_count
    when 1 then 3 # when we have 1 unique value, all 3 sides are equal
    when 2 then 2 # when we have 2 unique values, 2 sides are equal
    when 3 then 0 # when we have 3 unique values, then no sides are equal
    end
  end

  def invalid_sides?
    # make sure all sides are greater than 0
    return true if sides.include?(0)
    # make sure the sum rules apply
    return true if (sides[0] + sides[1]) <= sides[2]
    return true if (sides[0] + sides[2]) <= sides[1]
    return true if (sides[2] + sides[1]) <= sides[0]
    # return false if we've made it this far
    false
  end
end

=begin
(3, 4, 5)

3 + 4 > 5
3 + 5 > 4
4 + 5 > 3

=end

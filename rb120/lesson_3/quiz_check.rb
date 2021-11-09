module Describable
  def describe_shape
    "I am a #{self.class} and have #{self.class::SIDES} sides."
  end
end

class Shape
  include Describable

  # can to use self::SIDES here because self is a Class in this context, since this is a 
  # class method
  def self.sides
    self::SIDES
  end
end

class Quadrilateral < Shape
  SIDES = 4
  def sides
    SIDES
  end
end

class Square < Quadrilateral; end

Square.sides # => 4
Square.new.sides # => 4
Square.new.describe_shape # => "I am a Square and have 4 sides."
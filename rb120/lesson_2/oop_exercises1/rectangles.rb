class Rectangle
  def initialize(height, width)
    @height = height
    @width = width
  end

  def area
    @height * @width
  end
end

class Square < Rectangle
  def initialize(side)
    @height = side
    @width = side
  end
  # could also have used super within initialize to pass the side as the len and width.
end

# write a class called square that inherits from rectangle and can be used like this
square = Square.new(5)
puts "area of square = #{square.area}"
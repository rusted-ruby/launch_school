class Pet
  attr_reader :name, :age
  def initialize(name,age)
    @name = name
    @age = age
  end
end

class Cat < Pet
  attr_reader :color
  def initialize(name,age,color)
    super(name,age)
    @color = color
  end
  def to_s
    "my cat #{name} is #{age} years old and has #{color} fur."
  end
end

pudding = Cat.new("pudding", 7, "black and white")
butterscotch = Cat.new("Butterscotch", 10, "tan and white")
puts pudding, butterscotch
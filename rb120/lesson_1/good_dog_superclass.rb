# define our superclass (Animal)
# I guess animals can talk in this program
class Animal
  attr_accessor :name
  def initialize(name)
    @name = name
  end
end

# use this syntax to define GoodDog as a sub class of animal.
class GoodDog < Animal
  attr_accessor :color
  def initialize(color)
    super
    @color = color
  end
end

class BadDog < Animal
  attr_accessor :age
  def initialize(age, name)
    super(name)
    @age = age
  end
end

class Cat < Animal
end

mojo = GoodDog.new("black")
p mojo.name
p mojo.color
red = BadDog.new("forty eons", "red")
p red.age
p red.name

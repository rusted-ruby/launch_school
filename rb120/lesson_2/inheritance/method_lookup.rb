module Flyable
  def fly
    "I'm flying!!!!"
  end
end

class Animal
  attr_reader :color

  def initialize(color)
    @color = color
  end
end

class Cat < Animal
end

class Bird < Animal
  include Flyable
end

cat1 = Cat.new("black")
cat1.color

puts "what is the cat1 lookup method?"
puts "prediction: Cat => Animal => Object => Kernel => Basic Object"
puts Cat.ancestors
# I was right, but not really... since we find a color method for the Animal class, we never
# move on to object. 

bird1 = Bird.new("red")
bird1.color
puts Bird.ancestors
# lookup is Bird > Flyable > Animal
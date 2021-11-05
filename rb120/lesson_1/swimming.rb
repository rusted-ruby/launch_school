module Swimmable
  def swim
    "I was drowning, but now I'm swimming"
  end
end

class Animal
end

class Fish < Animal
  include Swimmable
end

class Mammal < Animal
end

class Cat < Mammal
end

class Dog < Mammal
  include Swimmable
end

mojo = Dog.new
nemo = Fish.new
minke = Cat.new

p mojo.swim
p nemo.swim
p minke.swim 
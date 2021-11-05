module Walkable
  def walk
    "lets go for a walk!"
  end
end

class Cat
  include Walkable
  attr_accessor :name
  def initialize(name)
    @name = name
  end
  def greet
    "hello! my name is #{name}"
  end
end

kitty = Cat.new("Minke")
p kitty.greet
kitty.name = "Luna"
p kitty.greet
p kitty.walk
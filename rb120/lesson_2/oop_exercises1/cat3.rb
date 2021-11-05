class Cat
  attr_accessor :color, :name
  COLOR = "Black"
  def initialize(name)
    self.name = name
    self.color = COLOR
  end
  def greet
    p "Hello! My name is #{name} and I am a #{color} cat"
  end
  def to_s
    "I'm #{name}!"
  end
end
kitty = Cat.new("Minke")
kitty.greet
puts kitty
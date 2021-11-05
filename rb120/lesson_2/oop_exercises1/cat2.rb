class Cat
  @@total_cats = 0
  def self.generic_greeting
    puts "Hello, I am a talking cat. Nothing to see here"
  end
  def self.total
    @@total_cats
  end
  attr_accessor :name
  def initialize(name)
    @name = name
    @@total_cats += 1
  end
  def rename(new_name)
    @name = new_name
  end
  def identity
    self
  end
  def personal_greeting
    "hello! my name is #{name}"
  end
end

Cat.generic_greeting
kitty = Cat.new("Chloe")
p kitty.name
kitty.class.generic_greeting
kitty.rename("Minke")
p kitty.name
p kitty.identity
p kitty.personal_greeting
kitty2 = Cat.new("Buster")
p Cat.total
module Swimmable
  def swim
    "I was drowning, but now I'm swimming"
  end
end

module Walkable
  def walk
    "I was tripping, but now I'm walking"
  end
end

module Climbable
  def climb
    "I was falling, but now I'm climbing"
  end
end

class Animal
  include Walkable

  def speak
    "I'm an animal, but I can TALK!"
  end
end

class GoodDog < Animal
  include Swimmable
  include Climbable
end

puts "animal method lookup"
puts Animal.ancestors
puts "GoodDog method lookup"
puts GoodDog.ancestors
fido = Animal.new
p fido.speak
p fido.walk
class Pet
  def run
    'running!'
  end

  def jump
    'jumping!'
  end
end

# dogs can do a lot of things. cats can do all of these things too, except swim and fetch.

class Dog < Pet
  def swim
    'swimming!'
  end
  def fetch
    'fetching!'
  end
  def speak
    'woof woof!'
  end
end

class Cat < Pet
  def speak
    "meow!"
  end
end

class Bulldog < Dog
  def swim
    "this dog can't swim!"
  end
end

pete = Pet.new
kitty = Cat.new
dave = Dog.new
bud = Bulldog.new

p pete.run                # => "running!"
#p pete.speak              # => NoMethodError

p kitty.run               # => "running!"
p kitty.speak             # => "meow!"
#p kitty.fetch             # => NoMethodError

p dave.speak              # => "bark!"

p bud.run                 # => "running!"
p bud.swim                # => "can't swim!"
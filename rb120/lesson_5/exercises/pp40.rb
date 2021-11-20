module Flight
  def fly; end
end

module Aquatic
  def swim; end
end

module Migratory
  def migrate; end
end

class Animal
end

class Bird < Animal
end

class Penguin < Bird
  include Aquatic
  include Migratory
end

pingu = Penguin.new
#pingu.fly

# what's the method lookup path for fly? 
# Penguin > Migratory > Aquatic > Bird > Animal > Object > BasicObject
puts pingu.class.ancestors
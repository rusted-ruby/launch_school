class Person
  def initialize(name)
    @name = name
  end
  def name
    @name.dup
  end
end

person1 = Person.new('James')
person1.name.reverse!
puts person1.name

# code can modify @name destructivly. Fix that.
# what happens if you run the code right now? => semaJ
# Need to fix this so the getter returns a copy of @name instead of a reference to the 
# underlying data that can then be mutated.

# used dup here, but could also have used clone. What's the difference?
# => dup - if you dup a frozen object, the copy of the object is not frozen.
# => clone - if you clone a frozen object, the copy of the object is also frozen. 
# nothing is frozen here, so it really doesn't matter which one we use.
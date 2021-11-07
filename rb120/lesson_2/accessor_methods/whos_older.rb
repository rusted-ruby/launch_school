class Person
  attr_writer :age
  def older_than?(other)
    age > other.age
  end
  protected
  attr_reader :age
end


# add the right accessor methods. @age should only be visible to instances of Person.
# aka, age getters should be private...?
# nah, we need protection here, since private methods can only work to get
# information from self, not self and another instance of the class. 
person1 = Person.new
person1.age = 17

person2 = Person.new
person2.age = 26
puts person1.older_than?(person2)
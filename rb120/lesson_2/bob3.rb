class Person
  attr_accessor :first_name, :last_name
  def initialize(full)
    @first_name = full.split[0]
    @last_name = full.split[1]
  end
  def name
    "#{self.first_name} #{self.last_name}".strip
  end
  def name=(new_name)
    initialize(new_name)
  end
  def same_name_as?(other_person)
    self.name == other_person.name
  end
  def to_s
    name
  end
end


# given the below result, creat a class for this.
bob = Person.new('Robert')
p bob.name                  # => 'Robert'
p bob.first_name            # => 'Robert'
p bob.last_name             # => ''
p bob.last_name = 'Smith'
p bob.name                  # => 'Robert Smith'

p bob.name = "John Adams"
p bob.first_name            # => 'John'
p bob.last_name             # => 'Adams'

#how can we tell if two objects have the same name? Let's write a method.
bob = Person.new("Robert Smith")
puts "this person's name is #{bob}"
rob = Person.new("Robert Smith")
p bob.same_name_as?(rob)
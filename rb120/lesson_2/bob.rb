class Person
  attr_accessor :name
  def initialize(name)
    @name = name
  end
end


# start with this, then define the class above
bob = Person.new('bob')
p bob.name                  # => 'bob'
p bob.name = 'Robert'
p bob.name                  # => 'Robert'
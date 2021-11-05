class Person
  attr_accessor  :first_name
  attr_reader :name, :last_name
  def initialize(name)
    @first_name = name
    @last_name = ""
    @name = name
  end
  def last_name=(last_name)
    @last_name = last_name
    @name = @name + " " + @last_name
  end
end
# do this one now. No setter method for name here
bob = Person.new('Robert')
p bob.name                  # => 'Robert'
p bob.first_name            # => 'Robert'
p bob.last_name             # => ''
p bob.last_name = 'Smith'
p bob.name                  # => 'Robert Smith'
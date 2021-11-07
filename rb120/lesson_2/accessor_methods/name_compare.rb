class Person
  attr_accessor :first_name
  attr_writer :last_name
  def first_equals_last?
    first_name == last_name
  end
  private
  # could also have just used attr_reader :last_name for shorthand here. 
  def last_name
    @last_name
  end
end
# put the right getter methods into the class.
# last name getter shouldn't be visible outside the class
# first name getter should be visible outside the class. 
person1 = Person.new
person1.first_name = 'Dave'
person1.last_name = 'Smith'
puts person1.first_equals_last?
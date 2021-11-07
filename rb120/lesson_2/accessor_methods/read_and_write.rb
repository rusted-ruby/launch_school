class Person
  attr_accessor :name
end

person1 = Person.new
person1.name = 'Jessica'
puts person1.name

# could also do this.

class OtherPerson
  def name
    @name
  end
  def name=(new_name)
    @name = new_name
  end
end

person2 = OtherPerson.new
person2.name = "Brosef"
puts person2.name
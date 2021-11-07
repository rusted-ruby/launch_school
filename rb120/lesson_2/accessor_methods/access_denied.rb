# can we keep the attr_accessor tag here and have a private writing method? Let's find out
# yes you can - the private write function takes precidence over the attr_accessor method. 
# could also have just changed attr_accessor to attr_reader

class Person
  attr_accessor :phone_number
  def initialize(number)
    @phone_number = number
  end
  private
  def phone_number=(number)
    @phone_number = number
  end
end

# implement a class such that we can read the value of the phone number instance var here.
person1 = Person.new(123456789)
puts person1.phone_number #=> 123456789
# but we can't change it and throw an error here. 
person1.phone_number = 987654321
puts person1.phone_number
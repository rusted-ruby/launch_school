class Person
  attr_writer :name

  def name
    @name.downcase.capitalize
  end
end

#implement an instance method to make sure the name is properly formatted.
person1 = Person.new
person1.name = 'eLiZaBetH'
puts person1.name #=> should be Elizabeth.

# could also have done this with puts, but that might not be what we want to do with every
# instance of the class irl. Note that we need to call puts directly on the instance of the 
# class for this to work though: NOT on person2.name

class Person2
  attr_accessor :name
  def to_s
    @name.downcase.capitalize
  end
end
person2 = Person2.new
person2.name = "eLizAbenTH"
puts person2
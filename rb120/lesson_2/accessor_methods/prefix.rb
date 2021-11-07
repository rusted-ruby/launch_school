class Person
  attr_writer :name
  def name
    "Mr. " + @name
  end
end

# add accessor methods to get the output commented below
# note we don't want the value of name to be stored with the prefix: we want the prefix
# to be added when we return the name. 
person1 = Person.new
person1.name = 'James'
puts person1.name # => Mr. James
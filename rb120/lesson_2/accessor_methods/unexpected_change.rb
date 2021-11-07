class Person
  def name=(full_name)
    # could also have just done @first_name, @last_name = name.split here
    name_arr = full_name.split
    @first_name = name_arr[0]
    @last_name = name_arr[1]
  end
  def name
    @first_name + " " + @last_name
  end
end

# implement the class such that a name is split into two instance vars when setting, 
# and the two names are joined into one upon getting
person1 = Person.new
person1.name = 'John Doe'
puts person1.name
class Person
  def age
    @age * 2
  end
  def age=(new_age)
    @age = new_age * 2
  end
end

# implement the class such that you mult it by 2 upon assignment, and again upon retrieval
person1 = Person.new
person1.age = 20
puts person1.age #=> 80
class Person
  def initialize(first_name, last_name)
    @first_name = format(first_name)
    @last_name = format(last_name)
  end
  def to_s
    "#{@first_name} #{@last_name}"
  end
  def first_name=(name)
    @first_name = format(name)
  end
  def last_name=(name)
    @last_name = format(name)
  end
  def format(value)
    value.capitalize
  end
end

person = Person.new('john', 'doe')
puts person

person.first_name = 'jane'
person.last_name = 'smith'
puts person

# change the code so it first returns "John Doe" then returns "Jane Smith"
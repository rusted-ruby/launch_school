class Person
  TITLES = ['Mr', 'Mrs','Ms', 'Dr']

  @@total_people

  def initialize(name)
    @name = name
    puts TITLES
  end

  def age
    @age
  end
end

class American
  def initialize(name)
    puts Person::TITLES
  end
end

ppl = Person.new("bob")
america = American.new("leroy")
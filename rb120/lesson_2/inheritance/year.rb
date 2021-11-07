class Vehicle
  attr_reader :year

  def initialize(year)
    @year = year
  end
end

class Car < Vehicle
end

class Truck < Vehicle
  def start_engine
    puts "red 2 go!"
  end
  def initialize(year)
    start_engine
    super
  end
end

# create two Vehicle subclasses to make this code work
truck1 = Truck.new(1994)
puts truck1.year
car1 = Car.new(2006)
puts car1.year
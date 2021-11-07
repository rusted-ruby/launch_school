module Towable
  def tow
    "I can tow a trailer!"
  end
end

class Vehicle
  attr_accessor :year
  def initialize(year)
    self.year = year
  end
end

class Truck < Vehicle
  include Towable
end

class Car < Vehicle
end

#create a superclass for truk and car that saves the value of year. 
truck1 = Truck.new(1994)
p truck1.year
p truck1.tow

car1 = Car.new(2006)
puts car1.year
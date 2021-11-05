class Vehicle
  attr_accessor :speed, :color, :creation_time
  @@number_of_vehicles = 0
  def self.get_num_of_vehicles()
    "there are #{@@number_of_vehicles} cars on the road today"
  end
  def initialize
    @@number_of_vehicles += 1
    @creation_time = Time.now
  end
  def age
    calculate_age
  end
  private
  def calculate_age
    time_of_creation = self.creation_time
    time_difference = Time.now - time_of_creation
    "this vehicle is #{time_difference} seconds old"
  end
end

module Bumpable
  def bump
    "yeah, you know this car bumps when it has two fifteens in the trunk."
  end
end

class MyCar < Vehicle
  attr_accessor :model
  attr_reader :year
  CAR_INFO = "this is a car"
  def self.gas_mileage(miles, gallons)
    "this car's gas mileage is #{miles / gallons} miles per gallon"
  end
  def initialize(y, c, m)
    super()
    @year = y
    self.color = c
    self.model = m
    self.speed = 0
  end

  def speed_up(num)
    self.speed += num
  end
  def break(num)
    self.speed -= num
  end
  def turn_off
    self.speed = 0
  end
  def to_s
    "This car is a #{self.color} #{self.year} #{self.model} traveling at #{self.speed} mph"
  end
  def spray_paint(new_color)
    self.color = new_color
    p "car's new color is #{self.color}"
  end
  def self.get_info
    CAR_INFO
  end
end

class MyTrunk < MyCar
  TRUNK_CONTENTS = "two fifteens"
  include Bumpable
  def self.get_contents
    TRUNK_CONTENTS
  end
end

car = MyCar.new(2016, "blue", "tesla")
p car.creation_time
puts car
car.speed_up(1000)
puts car
car.break(500)
puts car
car.turn_off
puts car
p car.color
#car.color = "red"
puts car
car.spray_paint("red")
puts car
p MyCar.gas_mileage(1000,12)
p Vehicle.get_num_of_vehicles
p "What distinguishes a car from other vehicles?: #{MyCar.get_info}"
p "I've got #{MyTrunk.get_contents} in my trunk"
my_trunk = MyTrunk.new(2050, "decked out", "palace")
p my_trunk.bump
other_car = MyCar.new(2001, "chromed out", "beater")
puts other_car
p MyTrunk.get_num_of_vehicles

#print out the method lookups
p "Vehicle lookup!"
p Vehicle.ancestors
p "MyCar method lookup!"
p MyCar.ancestors
p "MyTrunk method lookup!"
p MyTrunk.ancestors

p car.age
p my_trunk.age
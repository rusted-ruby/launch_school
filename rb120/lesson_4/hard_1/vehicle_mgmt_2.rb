module Moveable
  attr_accessor :speed, :heading
  attr_writer :fuel_capacity, :fuel_efficiency

  def range
    default_range = @fuel_capacity * @fuel_efficiency
    self.class.ancestors.include?(Seacraft) ? default_range + 10 : default_range 
  end
end

class WheeledVehicle
  include Moveable

  def initialize(tire_array, km_traveled_per_liter, liters_of_fuel_capacity)
    @tires = tire_array
    self.fuel_efficiency = km_traveled_per_liter
    self.fuel_capacity = liters_of_fuel_capacity
  end

  def tire_pressure(tire_index)
    @tires[tire_index]
  end

  def inflate_tire(tire_index, pressure)
    @tires[tire_index] = pressure
  end
end

class Auto < WheeledVehicle
  def initialize
    # 4 tires are various tire pressures
    super([30,30,32,32], 50, 25.0)
  end
end

class Motorcycle < WheeledVehicle
  def initialize
    # 2 tires are various tire pressures
    super([20,20], 80, 8.0)
  end
end

class Seacraft
  include Moveable
  attr_reader :propeller_count, :hull_count
  def initialize(num_propellers, num_hulls, km_traveled_per_liter, liters_of_fuel_capacity)
    @propeller_count = num_propellers
    @hull_count = num_hulls
    self.fuel_efficiency = km_traveled_per_liter
    self.fuel_capacity = liters_of_fuel_capacity
  end
end

class Catamaran < Seacraft
end

# add a class for Motoboats. They're similar to catamarans, except they will only ever have
# one hull and one propeller.

# BUT... motorboats aren't a type of cat. Maybe it would be better to create a new
# superclass for seacraft. 

class Motorboat < Seacraft
  def initialize(km_traveled_per_liter, liters_of_fuel_capacity)
    #call Catamaran's version of initialize, but default in the hull and prop numbers. 
    super(1,1,km_traveled_per_liter,liters_of_fuel_capacity)
  end
end

moto = Motorboat.new(50, 25)
auto = Auto.new
puts moto.class.ancestors.include?(Seacraft)
puts moto.range
puts auto.range

# up next - alter the range calculation for Seacraft to give them an extra 10 km by default.
# did this by implementing a tenary operator in the module. could also have just overridden
# the range method within the seacraft class. Done a call to super and just add ten to it
# that way, we wouldn't have needed to change the range method in the module at all. 
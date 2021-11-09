module WheeledVehicle
  def initialize(tire_array, km_traveled_per_liter, liters_of_fuel_capacity)
    @tires = tire_array
    super(km_traveled_per_liter, liters_of_fuel_capacity)
  end

  def tire_pressure(tire_index)
    @tires[tire_index]
  end

  def inflate_tire(tire_index, pressure)
    @tires[tire_index] = pressure
  end
end


class Vehicle
  attr_accessor :speed, :heading

  def initialize(km_traveled_per_liter, liters_of_fuel_capacity)
    @fuel_efficiency = km_traveled_per_liter
    @fuel_capacity = liters_of_fuel_capacity
  end

  def range
    @fuel_capacity * @fuel_efficiency
  end
end

class Auto < Vehicle
  include WheeledVehicle
  def initialize
    # 4 tires are various tire pressures
    super([30,30,32,32], 50, 25.0)
  end
end

class Motorcycle < Vehicle
  include WheeledVehicle
  def initialize
    # 2 tires are various tire pressures
    super([20,20], 80, 8.0)
  end
end

class Catamaran < Vehicle
  attr_reader :propeller_count, :hull_count
  attr_accessor :speed, :heading

  def initialize(num_propellers, num_hulls, km_traveled_per_liter, liters_of_fuel_capacity)
    #omit this for now. 
  end
end

# want to add a catamaran class to this. We still want to track fuel efficiency and range,
# but cats don't have wheels. 
# wheels is probably better off as a module we can mixinto the auto and motorcycle classes.
# we can redefine wheeled vehicles as vehicles, make cat, auto and moto inherit from it, 
# then mixin a wheeled module for auto and moto. 

puts Motorcycle.ancestors

# I think my version of this would work, but my guess is that I'm not using modules
# they way they should be intended.
# LS created a new moveable module, and outsourced all fuel efficiency calculations there.
# then they mixed in the moveable module into cat, auto and moto.
# I think key difference between my solution and theirs is that the cat class isn't a subclass
# of anything in their solution, and they didn't change anything about moto or auto because
# they mixed in the moveable module into wheeled vehicle.
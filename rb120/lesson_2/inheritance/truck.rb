class Vehicle
  attr_reader :year

  def initialize(year)
    @year = year
  end
end

class Truck < Vehicle
  attr_reader :bed_type
  def initialize(year, bed)
    @bed_type = bed
    super(year)
  end
end

class Car < Vehicle
end

# given this code, allow truck to accept a second parameter during instantiation
# Car should still only have one.
truck1 = Truck.new(1994, 'short')
puts truck1.year
puts truck1.bed_type
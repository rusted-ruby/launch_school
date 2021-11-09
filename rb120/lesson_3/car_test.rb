module Maintenance
  def change_tires
    "Changing #{Vehicle::WHEELS} tires."
  end
end

class Vehicle
  include Maintenance
  WHEELS = 4

  def check_tires
    change_tires
  end
end

a_car = Vehicle.new
p a_car.check_tires
module Drivable
  def drive
  end
end

class Car
  include Drivable
end

bobs_car = Car.new
bobs_car.drive
# give the car accss to the drive method. Make it so drive isn't a class method.
class Vehicle
attr_reader :make, :model

def initialize(make, model)
  @make = make
  @model = model
end

def to_s
  "#{make} #{model}"
end
end

class Car < Vehicle
  WHEELS = 4
end

class Motorcycle
  WHEELS = 2
end

class Truck
  WHEELS = 6
  attr_reader :payload

  def initialize(make, model, payload)
    super(make,model)
    @payload = payload
  end
end

#refactor these classes so they all inherit from a generic Vehicle class. 
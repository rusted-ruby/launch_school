module Speed
  def go_fast
    puts "I am a #{self.class} and going super fast!"
  end
end

class Car
  include Speed
  def go_slow
    puts "I am safe and driving slow."
  end
end

class Truck
  include Speed
  def go_very_slow
    puts "I am a heavy truck and like going very slow."
  end
end

# how can we make our cars go fast? 
# mix in the module and test it

car = Car.new
truck = Truck.new
car.go_fast
truck.go_fast
class Car
  attr_accessor :mileage

  def initialize
    @mileage = 0
  end

  def increment_mileage(miles)
    total = mileage + miles
    self.mileage = total
  end

  def print_mileage
    puts mileage
  end
end

car = Car.new
car.mileage = 5000
car.increment_mileage(678)
car.print_mileage # => should print 5678

=begin
What's happening here that shouldn't happen? - output now will be 5000. This is because
we just have mileage = total on line 10. Even though we have a setter method defined, Ruby
thinks we're creating a new local variable named milage. You'll need to change it to either
@mileage = total or self.mileage = total
=end
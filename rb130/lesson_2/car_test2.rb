class Car
  attr_accessor :wheels, :name

  def initialize
    @wheels = 4
  end

  def ==(other)
    self.name == other.name && other.is_a?(Car)
  end
end

require 'minitest/autorun'
require 'minitest/reporters'
MiniTest::Reporters.use!

class CarTest < MiniTest::Test

  def test_value_equality
    car1 = Car.new
    car2 = Car.new

    car1.name = "Kim"
    car2.name = "Kim"

    assert_equal(car1, car2)
  end
end
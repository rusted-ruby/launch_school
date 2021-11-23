class Car
  attr_accessor :wheels, :name

  def initialize
    @wheels = 4
  end

  def ==(other)
    other.respond_to?(:name) && name == other.name && other.is_a?(Car)
  end
end


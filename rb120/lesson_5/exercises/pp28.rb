class GoodDog
  DOG_YEARS = 7
  attr_accessor :name, :age

  def initialize(n, a)
    self.name = n
    self.age = DOG_YEARS * a
  end

  def to_s
    "#{@name}"
  end
end

sparty = GoodDog.new(52, 5)
puts sparty
p sparty
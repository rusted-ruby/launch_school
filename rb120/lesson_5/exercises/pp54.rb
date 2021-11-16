class House
  attr_reader :price

  def initialize(price)
    @price = price
  end

  def <(other)
    price < other.price
  end

  def >(other)
    price > other.price
  end
end

home1 = House.new(100_000)
home2 = House.new(150_000)
puts "home 1 is cheaper" if home1 < home2 # => home1.<(home2)
puts "home2 is more expensive" if home2 > home1
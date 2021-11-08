class House
  attr_reader :price

  def initialize(price)
    @price = price
  end
end

home1 = House.new(100_000)
home2 = House.new(150_000)
puts "Home 1 is cheaper" if home1.price < home2.price
puts "Home 2 is more expensive" if home2.price > home1.price

=begin
# modify the code so the above program works while only defining ONE new method in House.
So what happens in its current state? probably nothing, since we're comparing two instances
of a class.
We can fix this by just changing lines 11 and 12 to use price getter methods on the home objects

What did LS do? Their solution was interesting - they used the compare module, then
implemented a custom <=> method. 

I'll do it below, but when you do this, you can use comparison operators between two instances
of a class - when you include the Comparable module, you just need to implement <=> to let
Ruby know what you're actually comparing in the objects. 
=end

class House2
  attr_reader :price
  include Comparable

  def initialize(price)
    @price = price
  end

  def <=> (other_house)
    price <=> other_house.price
  end
end

home1 = House2.new(100_000)
home2 = House2.new(150_000)
puts "Home 1 is cheaper" if home1 < home2
puts "Home 2 is more expensive" if home2 > home1
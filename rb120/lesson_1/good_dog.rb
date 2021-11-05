class GoodDog
  # create a class variable for the GoodDog class
  @@number_of_dogs = 0
  # create an attribute accessor for this class
  attr_accessor :name, :height, :weight
  # define an instance method for our GoodDog class.
  def initialize(n, h, w)
    self.name = n
    self.height = h
    self.weight = w
    @@number_of_dogs += 1
  end
  def self.total_number_of_dogs
    @@number_of_dogs
  end
  def speak
    "#{name} says gm king"
  end
  def change_info(n, h, w)
    self.name = n
    self.height = h
    self.weight = w
  end
  def info
    "#{self.name} weighs #{self.weight} and is #{self.height} tall."
  end
end

mojo = GoodDog.new("Mojo", "22 inches", "40 lbs")
p mojo.speak
p mojo.name
p mojo.info
mojo.change_info("Mojohannes", "22 * 2 inches", "swol")
p mojo.info
p GoodDog.total_number_of_dogs

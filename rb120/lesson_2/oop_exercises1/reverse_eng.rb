class Transform
  def initialize(letters)
    @data = letters
  end
  def uppercase
    @data.upcase
  end
  def self.lowercase(input)
    input.downcase
  end
end 

# create a class that will give you
# ABC
# xyz
# when the below code is run.
my_data = Transform.new('abc')
puts my_data.uppercase
puts Transform.lowercase('XYZ')
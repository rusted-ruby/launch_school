require "pry-byebug"

class FixedArray
  attr_reader :array
  def initialize(length)
    @array = [nil] * length
  end

  # probably better to return a clone of our array instance variable here.
  # if we used a mutating method on the result of this array, we'd change the value
  # of the array object in our array instance variable. Probably not a great choice. 
  def to_a
    array.clone
  end

  # could also have used self[index] to validate the error. 
  def []=(index, new_value)
    raise IndexError if invalid_index?(index)
    array[index] = new_value
  end

  # could also have used the Array#fetch method to throw an error here. 
  def [](index)
    raise IndexError if invalid_index?(index)
    array[index]
  end

  def invalid_index?(index)
    index >= array.length || (index) < (array.length * -1)
  end

  def to_s
    to_a.to_s
  end
end

# create a FixedArray class that implements the following code.
# this should print true 16 times when you run it

fixed_array = FixedArray.new(5)
puts fixed_array[3] == nil
puts fixed_array.to_a == [nil] * 5

fixed_array[3] = 'a'
puts fixed_array[3] == 'a'
puts fixed_array.to_a == [nil, nil, nil, 'a', nil]

fixed_array[1] = 'b'
puts fixed_array[1] == 'b'
puts fixed_array.to_a == [nil, 'b', nil, 'a', nil]

fixed_array[1] = 'c'
puts fixed_array[1] == 'c'
puts fixed_array.to_a == [nil, 'c', nil, 'a', nil]

fixed_array[4] = 'd'
puts fixed_array[4] == 'd'
puts fixed_array.to_a == [nil, 'c', nil, 'a', 'd']
puts fixed_array.to_s == '[nil, "c", nil, "a", "d"]'

puts fixed_array[-1] == 'd'
puts fixed_array[-4] == 'c'


begin # = > problem
  fixed_array[6]
  puts false
rescue IndexError
  puts true
end

begin
  fixed_array[-7] = 3
  puts false
rescue IndexError
  puts true
end

begin # > problem
  fixed_array[7] = 3
  puts false
rescue IndexError
  puts true
end
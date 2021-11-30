# create an each with object method. pass each element of an array and an arbitrary object
# to a block. object passed to the block is an argument to each with object, and can be
# updated by the block. The method returns the final value of the object.

def each_with_object(arr, obj)
  arr.each do |value|
    yield(value, obj)
  end
  obj
end


result = each_with_object([1, 3, 5], []) do |value, list|
  list << value**2
end
p result == [1, 9, 25]

result = each_with_object([1, 3, 5], []) do |value, list|
  list << (1..value).to_a
end
p result == [[1], [1, 2, 3], [1, 2, 3, 4, 5]]

result = each_with_object([1, 3, 5], {}) do |value, hash|
  hash[value] = value**2
end
p result == { 1 => 1, 3 => 9, 5 => 25 }

result = each_with_object([], {}) do |value, hash|
  hash[value] = value * 2
end
p result == {}
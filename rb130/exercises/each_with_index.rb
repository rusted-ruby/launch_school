# create an each with index method. pass each element and its index to a block.
# block's return val isn't used. each_with_index returns the original collection.
# take an array as an argument. 

def each_with_index(arr)
  idx = 0
  arr.each do |value|
    yield(value, idx)
    idx += 1
  end
  arr
end

result = each_with_index([1, 3, 6]) do |value, index|
  puts "#{index} -> #{value**index}"
end

puts result == [1, 3, 6]

=begin
output should be 
0 -> 1
1 -> 3
2 -> 36
true
=end
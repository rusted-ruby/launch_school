# write a count method that iterates over members of a collection, passes the elements
# to a block, and returns the number of elements where the block returned a truthy value.
# should take zero or more arguments
# splat argument will likely be helpful here. 

def count(*params)
  count = 0
  params.each do |element|
    count += 1 if yield(element)
  end
  count
end

p count(1, 3, 6) { |value| value.odd? } == 2
p count(1, 3, 6) { |value| value.even? } == 1
p count(1, 3, 6) { |value| value > 6 } == 0
p count(1, 3, 6) { |value| true } == 3
p count() { |value| true } == 0
p count(1, 3, 6) { |value| value - 6 } == 3
# write your own version of the enumerable#any? method.
# looks like we need a block and an argument.
# we should return true the first time the block is true. 
# this works because [].each will never invoke the code in the do block b/c there
# aren't any elements to iterate over. 

def any?(array)
  array.each do |element|
    return true if yield(element)
  end
  false
end

# these tests should return true
p any?([1, 3, 5, 6]) { |value| value.even? } == true
p any?([1, 3, 5, 7]) { |value| value.even? } == false
p any?([2, 4, 6, 8]) { |value| value.odd? } == false
p any?([1, 3, 5, 7]) { |value| value % 5 == 0 } == true
p any?([1, 3, 5, 7]) { |value| true } == true
p any?([1, 3, 5, 7]) { |value| false } == false
p any?([]) { |value| true } == false
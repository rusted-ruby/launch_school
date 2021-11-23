# create your own map method

# each_with_object returns the object passed into the method rather than the calling object
# the object you pass into the method becomes the second argument to the do block, in this
# case, result. result starts as [] and is returned once we've iterated through the last
# element of input. 

def map(input)
  input.each_with_object([]) do | element, result |
    result << yield(element)
  end
end

# test cases
p map([1, 3, 6]) { |value| value**2 } == [1, 9, 36]
p map([]) { |value| true } == []
p map(['a', 'b', 'c', 'd']) { |value| false } == [false, false, false, false]
p map(['a', 'b', 'c', 'd']) { |value| value.upcase } == ['A', 'B', 'C', 'D']
p map([1, 3, 4]) { |value| (1..value).to_a } == [[1], [1, 2, 3], [1, 2, 3, 4]]
# now do something similar, but with a custom all? method
# all returns true if each element in a collection returns a truthy value when passed
# to a block. if one element returns a falsey value, all? will stop running. 

def all?(input)
  input.each do |element|
    return false if !yield(element)
  end
  true
end

p all?([1, 3, 5, 6]) { |value| value.odd? } == false
p all?([1, 3, 5, 7]) { |value| value.odd? } == true
p all?([2, 4, 6, 8]) { |value| value.even? } == true
p all?([1, 3, 5, 7]) { |value| value % 5 == 0 } == false
p all?([1, 3, 5, 7]) { |value| true } == true
p all?([1, 3, 5, 7]) { |value| false } == false
p all?([]) { |value| false } == true
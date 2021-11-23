# write a method that takes an array as an argument, and a block.
# the method should pass elements to a block and return the number of times the block returns true

def count(input)
  true_count = 0
  input.each do |element|
    true_count += 1 if yield(element)
  end
  true_count
end

# test cases
p count([1,2,3,4,5]) { |value| value.odd? } == 3
p count([1,2,3,4,5]) { |value| value % 3 == 1 } == 2
p count([1,2,3,4,5]) { |value| true } == 5
p count([1,2,3,4,5]) { |value| false } == 0
p count([]) { |value| value.even? } == 0
p count(%w(Four score and seven)) { |value| value.size == 5 } == 2
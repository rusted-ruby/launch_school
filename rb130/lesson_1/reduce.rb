=begin 
Build your own reduce method... what does the Enumerable#reduce do though?
reduce is an alias for inject. it folds / accumulates a collection into 1 object. 
folding mechanism is dependent on a block passed in as a param. 

block takes two params - an accumulator object (which is passed into the block) and an
element from the collection its iterating on. finally, it returns the accumulator object
=end

def reduce(array, accumulator_start = array[0])
  accumulator = accumulator_start
  index = 1
  while index < array.size
    element = array[index]
    accumulator = yield(accumulator, element)
    index += 1
  end
  accumulator
end

array = [1,2,3,4,5]
p reduce(array) { |acc, num| acc + num } # => 15
p reduce(array, 10) { |acc, num| acc + num } # => 25
p reduce(['a', 'b', 'c']) { |acc,val| acc += val } # => should be 'abc'
p reduce([[1,2], ['a','b']]) { |acc, val| acc + val } # => shoud be [1, 2, 'a', 'b']
#p reduce(array) { |acc, num| acc + num if num.odd? } # => error
=begin
why is the above line an error? 
first iteration: set acc = 0 + 1 (num is odd).
second interation: set acc = 1 + 2 if 2.odd? > this becomes nil (for some reason).
third iteration: acc = nil + 3. Can't add nil and an integer, so we get an error.  
=end
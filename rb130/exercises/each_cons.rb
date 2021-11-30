=begin
create an each_cons method. pass sequence of N consecutive elements and pass them to a block
return value of the method is nil. 
write each cons method that takes arguments 2 at a time and passes them to a block. 


=end

def each_cons(arr)
  return nil if arr.empty?
  idx = 0
  (arr.size - 1).times do 
    yield(arr[idx], arr[idx + 1])
    idx += 1
  end
  nil
end

hash = {}
result = each_cons([1, 3, 6, 10]) do |value1, value2|
  hash[value1] = value2
end
p result == nil
p hash == { 1 => 3, 3 => 6, 6 => 10 }

hash = {}
result = each_cons([]) do |value1, value2|
  hash[value1] = value2
end
p hash == {}
p result == nil

hash = {}
result = each_cons(['a', 'b']) do |value1, value2|
  hash[value1] = value2
end
p hash == {'a' => 'b'}
p result == nil

=begin
Now, update the method so it takes an argument telling it how many consecutive elements
to pass to the block 

first, change the number of times you do something. 
  arr size is 4, cons is 1 - do it 4 times
  arr size is 4, cons is 2 - do it 3 times
  arr size is 4, cons is 3 - do it 2 times
  arr size is 4, cons is 4 - do it once.
  formula is (arr.size - cons) + 1

second, control what is passed to the block - first iteration, idx is 0
    cons is 1, just arr[idx]
    cons is 2, pass arr[idx] and arr[idx + 1]
    cons is 3 pass arr[idx] and arr[idx+1 .. idx+2]
    cons is 4 pass arr[idx] and arr[idx+1..idx+3]
  second 
  slice might be better - have a starting index, and we can get size from const

  Wait, we don't even need to do any of this... just pass the elemtnts we need into yield and 
  our splat operator in the block will do the rest; yield only needs one argument. 
  so we just need to make sure we get a slice of the right size. 

  But then that breaks the 1 cons case because we need the value itself, not a one element
  array containing the value... damn, this is tricky
  just brute force this with an if else statement, but that feels wrong...
  Yeah, don't do that. We can use the splat operator with yield to help with this. 
  uhh... why did that work?
=end

def each_cons(arr,cons)
  return nil if arr.empty?
  idx = 0
  ((arr.size - cons) + 1).times do 
    yield(*arr.slice(idx, cons))
    idx += 1
  end
  nil
end

hash = {}
each_cons([1, 3, 6, 10], 1) do |value|
  hash[value] = true
end
p hash == { 1 => true, 3 => true, 6 => true, 10 => true }
p hash

hash = {}
each_cons([1, 3, 6, 10], 2) do |value1, value2|
  hash[value1] = value2
end
p hash == { 1 => 3, 3 => 6, 6 => 10 }
p hash

hash = {}
each_cons([1, 3, 6, 10], 3) do |value1, *values|
  hash[value1] = values
end
p hash == { 1 => [3, 6], 3 => [6, 10] }
p hash

hash = {}
each_cons([1, 3, 6, 10], 4) do |value1, *values|
  hash[value1] = values
end
p hash == { 1 => [3, 6, 10] }
p hash

hash = {}
each_cons([1, 3, 6, 10], 5) do |value1, *values|
  hash[value1] = values
end
p hash == {}
p hash
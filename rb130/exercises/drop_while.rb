# create a drop_while method. iterate over members of a collection and pass each member to
# a block. if the block returns a falsey value, return the remaining elements of the collection
# (including the one that returned the falsey value) in a new array. 
# each with index might be the most helpful here... |value, index|
# can use that to work with the Array#slice method to return a new array if needed. 

def drop_while(arr)
  slice_index = nil
  arr.each_with_index do |val,idx|
    if !yield(val)
      slice_index = idx
      break
    end
  end
  # if we found an index that returned a falsey value...
  if slice_index
    return arr.slice(slice_index, arr.size)
  else
    return []
  end
end

p drop_while([1, 3, 5, 6]) { |value| value.odd? } == [6]
p drop_while([1, 3, 5, 6]) { |value| value.even? } == [1, 3, 5, 6]
p drop_while([1, 3, 5, 6]) { |value| true } == []
p drop_while([1, 3, 5, 6]) { |value| false } == [1, 3, 5, 6]
p drop_while([1, 3, 5, 6]) { |value| value < 5 } == [5, 6]
p drop_while([]) { |value| true } == []

# how did LS do it? Just indexed using [slice_index..-1], which is pretty slick
# also used a while loop... let's see if I can work that one out.

def drop_while2(arr)
  idx = 0
  while yield(arr[idx]) && idx < arr.size
    idx += 1
  end
  arr[idx..-1]
end

p drop_while2([1, 3, 5, 6]) { |value| value.odd? } == [6]
p drop_while2([1, 3, 5, 6]) { |value| value.even? } == [1, 3, 5, 6]
p drop_while2([1, 3, 5, 6]) { |value| true } == []
p drop_while2([1, 3, 5, 6]) { |value| false } == [1, 3, 5, 6]
p drop_while2([1, 3, 5, 6]) { |value| value < 5 } == [5, 6]
p drop_while2([]) { |value| true } == []
=begin
take an array as input
return a pair of nested arrays.
if odd # of indicies, then middle value is in first nested array.
okay... how to do this?
can just do it via slices of the array. first half can be 0 to arr.size/2 -1 index. Then add the middle value if the size is off
second half can be arr.size/2 to arr.size-1

Case even index
first half is arr[0..arr.size/2 -1]
second hald is arr[arr.size/2..arr.size-1

Case odd index
first hald is arr[0..arr.size/2]
second half is arr[arr.size/2 + 1..arr.size-1]
=end

def halvsies(arr)
  if arr.size.even? 
    first_half = arr[0..(arr.size/2 -1)]
    second_half = arr[arr.size/2..arr.size-1]
  else
    first_half = arr[0..arr.size/2]
    second_half = arr[(arr.size/2 + 1)..arr.size-1]
  end
  [first_half, second_half]
end

p halvsies([1,2,3,4])
p halvsies([1,5,2,4,3])
p halvsies([5])
p halvsies([])

# could also have used slice here
# array.slice(starting index, length of slice)
# ceil is also helpful for handling the odd case as well.

def halvsies2(arr)
  middle = (arr.size / 2.0).ceil
  first_half = arr.slice(0, middle)
  second_half = arr.slice(middle, arr.size / 2)
  [first_half, second_half]
end
p halvsies2([1,2,3,4])
p halvsies2([1,5,2,4,3])
p halvsies2([5])
p halvsies2([])
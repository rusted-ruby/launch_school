# write an method that takes an array and mutates it such that its elements are reversed.
# you cannot use the Array#reverse method.

# we could use shift and push for this...

#lol, no, this is just going to re-build the original array. haha. 
=begin  
def reverse_arr(arr)
  len = arr.size
  len.times do 
    arr.push(arr.shift)
  end
end
=end

# how could we ACTUALLY do this. 
# well, we'll need to mutate the original array... but we'll need some way to keep track of 
# what the original array was... so we'll first need to duplicate our array within the method
# so we can reference the original blueprint.

# shift original array to remove an index
# get the necessary item from the copy of the original array
# << the original array to add the necessary item to the end
# do this arr.size times.

=begin
say arr = [1,2,3,4,5]
new arr[0] = arr[4] = arr[-1]
new_arr[1] = arr[3] = arr[-2]
=end

def reverse_arr(arr)
  orig_arr = arr.dup
  count = -1
  arr.size.times do
    arr.shift
    new_value = orig_arr[count]
    arr << new_value
    count -= 1
  end
end

list = [1,2,3,4]
p list
reverse_arr(list)
p list

list = %w(a b c d e)
p list
reverse_arr(list)
p list

list = ['abc']
p list
reverse_arr(list)
p list

list = []
p list
reverse_arr(list)
p list

# ls did this using normal array assignment, but they did use a left index of 0 and a right
# index of -1, so I was on the money there. 

# part 2! now do the same thing, but without mutating the original array.
# this should be easy - just sub out the copy you made for the original.

def reverse_arr_no_mut(arr)
  new_arr = []
  count = -1
  arr.size.times do
    new_value = arr[count]
    new_arr << new_value
    count -= 1
  end
  new_arr
end

list = [1,2,3,4]
p list
p reverse_arr_no_mut(list)


list = %w(a b c d e)
p list
p reverse_arr_no_mut(list)

list = ['abc']
p list
p reverse_arr_no_mut(list)

list = []
p list
p reverse_arr_no_mut(list)

# lol, there' sanother way we could have done this using the reverse_each method on the 
# array. This is exactly like each, except it processes the indicies in reverse order. 
# sounds pretty handy.
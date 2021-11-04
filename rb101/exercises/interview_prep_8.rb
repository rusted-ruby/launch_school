=begin
watch others code part 6 
https://launchschool.com/lessons/3ce27abc/assignments/a3295d50
given an array of integers, return the index where the sum of the array elements to the right
and left of the index are equal to each other

[1,2,3,4,3,2,1] returns 3
[20,10,-80,10,10,15,35] returns 0 (0 index is the place where that's true)

in = an array of integers
out is a special index 

init a variable to store the index
iterate through the array on an index by index basis
> create two sub arrays: one for the values to the left of our index, one for the values to the right of our index
> sum up the entries in the arrays
> compare the sums
> if the sums are equal, store the current index in the var and break the loop. 

[1,2,3,2,1]
mod = 1
left = slice(0,0)
right = slice(1, arr.size -1)
mod = 2
left = slice(0,1)
right = slice(2, arr.size - 2)
mod = 3
left = slice(0,2)
right = slice(3, arr.size - 3)
mod = 4
left = slice (0,3)
right = slice(4, arr.size - 4)
mod = 5
left = slice(0,4)
right = slice(5, arr.size - 5)

iterate arr.size times 1.upto(arr.size) |mod|
left hand idx is always 0. left hand size is always mod -1
right hand idx is always dependant on mod


Questions:
what if there's multiple indicies in the array that return this condition? assume we return the first one
Do I need to account for non-integer elements. 
=end

def find_even_index(arr)
  arr_length = arr.size
  1.upto(arr_length) do |mod|
    left_arr = arr.slice(0,mod-1)
    right_arr = arr.slice(mod, arr_length-mod)
    if left_arr.sum == right_arr.sum
      return mod-1
    end
  end
  -1
end

p find_even_index([1,2,3,4,3,2,1]) #3
p find_even_index([1,100,50,-51,1,1]) #1
p find_even_index([-1, -2, -3, -4, -3, -2, -1]) #3
p find_even_index([1,2,3,4,5,6]) #-1
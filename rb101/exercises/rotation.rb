# rote an array by moving the first element to the end of the array.
# the original array should not be modified.

# can't use pop, since that mutates the caller. 
# or you could, but you'd need to dupliacte the object passed into the method 
# so the original is preserved. let's do that

def rotate_array_alt(arr)
  arr_copy = arr.dup
  arr_copy.push(arr_copy.shift)
end

x = [1, 2, 3, 4]
p rotate_array_alt(x) == [2, 3, 4, 1]   # => true
p x == [1, 2, 3, 4]  

# part 2!
# write a method that rotates the last n digits of a number.
# can use the rotate_array fn above. 
# need to convert integers to an array

# better method for this
# makes use of the fact you can index arrays based on neagative numbers... so arr[-1] is the 
# last element of arr. I wouldn't have thought you could do positive and negative 
# referencing. 

# how can we do this?
# in = a number and a parameter
# out = number with some digits reversed
# pass in 4, it takes index at 2, sets it to end, and moves the other elements of the arr down.
=begin
turn the number into an array to use the rotate_array function on it.
magic happens here
> split the array we create in two. First part has length size.arr - n
> first array is gotten with slice(o,size.arr-n)
> second is gotten with slice(-n,n)
Turn the array back into a number - can use arr.join.to_i for this. 


=end
def rotate_array(arr)
  arr[1..-1] + [arr[0]]
end

def rotate_rightmost_digits(num, n)
  # could have also used num.to_s.chars
  num_arr = num.digits.reverse
  first_array = num_arr.slice(0, (num_arr.size)-n)
  second_array = num_arr.slice(-n, n)
  second_array = rotate_array(second_array)
  (first_array + second_array).join.to_i
end

p rotate_rightmost_digits(735291,1)
p rotate_rightmost_digits(735291,2)
p rotate_rightmost_digits(735291,3)
p rotate_rightmost_digits(735291,4)
p rotate_rightmost_digits(735291,5)

p "part 3!"
=begin
Maxmimum rotation
In = a number
out = the max rotation of that number. 
What is max rotation:
given a number, rotate it num.size-1 times. 
So we can do this with rotate_rightmost_digits. Need to get the nmber of digits in number,
then call rotate_rightmost_digits size-1 times where we decrease the n we pass to it each time
how to handle leading zeros? 105 case
=end
def max_rotation(num)
  number_of_digits = num.digits.size
  number_of_digits.downto(2) do |n|
    num = rotate_rightmost_digits(num, n)
  end
  num
end

p max_rotation(735291)
p max_rotation(3)
p max_rotation(105)
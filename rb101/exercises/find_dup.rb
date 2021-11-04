# https://launchschool.com/exercises/fc74794d
# given an array where one item is duplicative, how would you find the item that occurs
# more than once?

=begin
input = an array with one duplicate element
output = whatever element ocurrs more than once. 

init a variable to store our dup value
init an empty array (new array)
iterate through input array with each.
> for each element in input array, check to see if it lives in new array
>> if it does not live in new array, add it to new array
>> if it does live in new array, set the dup value var to the element and break the loop
return the dup value var
=end

def find_dup(arr)
  new_arr = []
  dup_var = ""
  arr.each do |element|
    if new_arr.include?(element)
      dup_var = element
      break
    else
      new_arr << element
    end
  end
  dup_var
end

p find_dup([1, 5, 3, 1]) #== 1
p find_dup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
          38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
          14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
          78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
          89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
          41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
          55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
          85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
          40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
          7,  34, 57, 74, 45, 11, 88, 67,  5, 58]) #== 73

# how did LS solve this?
# used two methods I'm not familiar with: .find and .count

# count is pretty simple - call it on an array with a value as parameter. It tells you 
# how often that element is within the array you call it on.

# find is new though. It is called on a collection and you can pass each element in the collction
# to a block. It returns the first element for which the block returns a truthy value.
# so they use this function to return the first element that has a count of two.
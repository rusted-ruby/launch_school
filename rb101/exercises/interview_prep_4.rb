=begin
watch others code pt 3
write an array that finds the largest maximum sum of a continuous subsequence of an integer array

[-2, 1, -3, 4, -1, 2, 1, -5, 4] is 6 > [4, -1, 2, 1] = sum is 6

array of all positive numbers can just add the sum
array of all negative numbers should return 0
empty array should return 0
question: will the input only have integers? Or can there be empty arrays in there too?
question: what about the case where there are only 0s and negative integers? Should the sum of that be zero as well?
question: should I check and see if the array is all positive numbers and return the simple array sum if that's the case?
> my algorithm computes the sum for that case okay, but want to see if that's something that they want me to do. 

input is an array
output is an integer - largest sum of a continuous subsequence of the array. 
How to go about this one? 

[4, -1, 2, 1]
keep track of two differetn things: starting index (i), then substring length (l)
[4, -1] i=0, l=2
[-1,2] i=1, l=2
[2,1] i=2 l=2 
[4, -1, 2] i=0 l=3
[-1, 2, 1] i=1 l=3
[4, -1, 2, 1] i=0 l=4

Outer loop iterating over l - go from 2 to arr.size 
inner loop iterating over i - go from 0 to arr.size -2 and reduce iterations by 1 each time

compute the sum of each subsequence. 

have keep track of the sum for each subsequence as well
=end

def max_sequence(arr)
  if zero_condition(arr)
    return 0
  end
  max_sum = 0
  sequence_length = 2
  arr_length = arr.size
  ending_index = arr_length - 2
  sequence_length.upto(arr_length) do |l|
    starting_index = 0
    starting_index.upto(ending_index) do |i|
      sequence = arr.slice(i,l)
      sum = sequence.sum
      if sum > max_sum
        max_sum = sum
      end
    end
    ending_index -= 1
  end
  max_sum
end

def zero_condition(arr)
  # if its an empty array
  if arr == []
    return true
  end

  # if its all negative numbers
  negative_flag = true
  arr.each do |element|
    if element > 0 
      negative_flag = false
      break
    end
  end
  negative_flag
end

p max_sequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
p max_sequence([-2, 1, -7, 4, -10, 2, 1, 5, 4])
p max_sequence([])
p max_sequence([-1,-1,-2,-6,-1])
p max_sequence([-1,0,-6,-234,-234])
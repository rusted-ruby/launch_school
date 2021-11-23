=begin
how to do this? Not bad. since we know the array is sorted, we can get our start and 
end points using Array#first and Array#last. Then we can do first.upto(last) and add
integers to a new array if they fail an Array#include? invocation
=end

def missing(in_array)
  out_array = []
  in_array.first.upto(in_array.last) do |num|
    if !in_array.include?(num)
      out_array << num
    end
  end
  out_array
end


# write a method that takes a sorted integer array as input
# return all the missing integers between the first and last element (in order)
p missing([-3, -2, 1, 5]) == [-1, 0, 2, 3, 4]
p missing([1, 2, 3, 4]) == []
p missing([1, 5]) == [2, 3, 4]
p missing([6]) == []

# how did ls do this one?

def missing2(array)
  result = []
  # first and second are two consecutive elements in the array
  array.each_cons(2) do |first,second|
    p "first"
    p first
    p "second"
    p second
    p "first + 1"
    p first + 1
    p " second - 1"
    p second - 1 
    # this takes an array of all numbers between the first and second elements and 
    # concatenates them to the result.
    result.concat(((first + 1)..(second-1)).to_a)
  end
  result
end
p missing2([-3, -2, 1, 5]) == [-1, 0, 2, 3, 4]
p missing2([1, 2, 3, 4]) == []
p missing2([1, 5]) == [2, 3, 4]
p missing2([6]) == []
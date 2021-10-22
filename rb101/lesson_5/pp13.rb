=begin 
this one is weird... first thought is to use sort_by?
is there something we can use to find the odd elements of an array?
If we use sort_by, do we need to look at the same elements for each iteration? 
I'd assume we do.
No... when we use "sort by" we can completely change what gets passed in and it sorts
by that instead. In other words, we can do this with two loops: one calls sort_by on arr
and another one that uses map to return arrays containing only the odd integers from the 
sub arrays

Kind of wrong, we don't need map for the inner loop, we need select
=end

# Order this array by only considering the odd numbers in the sub arrays
arr = [[1, 6, 7], [1, 4, 9], [1, 8, 3]]
# output should be this: [[1, 8, 3], [1, 6, 7], [1, 4, 9]]

sort_arr = arr.sort_by do |elements|
  elements.select do |num|
    num.odd?
  end
end
p sort_arr
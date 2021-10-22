# use select or reject to return a new array with the same structure that only has
# multiples of 3
arr = [[2], [3, 5, 7], [9], [11, 13, 15]]

# select looks at how truthy a value is and returns a new collection
# outer loop to look over each element in the parent array. 
# > for this one, need some way to say "if this element has an integer divisible by 3, return true"
# > could we do that with each?

#above is all wrong. Need to start with a map statement (since we need a new arr), 
# then use a select statement to decide which pieces of each element make it into the 
# new array. The select passes arrays with the right elements to the map method. 
new_arr = arr.map do |element|
  element.select do |integer|
    integer % 3 == 0
  end
end
p new_arr
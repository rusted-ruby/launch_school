# sort this array of number strings by decesnding numeric value
arr = ['10', '11', '9', '7', '8']
new_arr = arr.sort_by do |element|
  element.to_i
end.reverse
p new_arr

# could also have done this
new_arr2 = arr.sort do |a,b|
  b.to_i <=> a.to_i
end
p new_arr2
# given this, return a new array of the same struct, but with sub-arrays being ordered
# in alphabetical or numeric order
arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']]

# need an outer loop to go through the first pieces of an array. Use map since we're creating a new one
# then an if statment to decide which inner loop to execute. 
  #> wait, we don't need this piece. Sort works perfectly well on strings and ints. 
  #> just need to make sure its b <=> a so we do it in decending order

new_arr = arr.map do |element|
  element.sort do |a,b|
    b <=> a
  end
end
p new_arr
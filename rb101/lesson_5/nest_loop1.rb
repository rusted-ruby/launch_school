# what will this code do? let's take it through the first iteration
new_arr = [[1, 2], [3, 4]].map do |arr|
  #arr = [1,2]
  arr.map do |num|
    num * 2
    # this returns a new array = [2, 4]
  end
  # the values returned by this outer block become the values in the array that's finally 
  # returned. For the first iteration, its [2,4]. So the final array will have each inner 
  # array multed by 2.
end
# [[2, 4], [6, 8]]
p new_arr
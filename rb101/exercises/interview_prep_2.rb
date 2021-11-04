# https://launchschool.com/exercises/2a5d5a4e
# bubble sort an array

=begin
How will this work? 
in = an array
out = the same array sorted (you can mutate the array in place)
will need to iterate through the array and compare each entry to the one nearest it.
iterate from index 0 to index arr.size - 2 for the comparison
hardest part will be how we stop this. 

Outer loop - have a break flag thats set to true at the top of each loop
inner loop is an each loop over the array. Do the comparisons in this loop and set the break flag to false if we make a comparison
=end

def bubble_sort!(arr)
  # outer loop. Break this when array is sorted
  loop do
    index = 0
    break_flag = true
    # comparison loop goes here
    (arr.size - 1).times do
      first_value = arr[index]
      second_value = arr[index + 1]
      # could also have used a next statement to skip to the next value in the loop if we
      # didn't need to swap here. 
      if first_value > second_value
        break_flag = false
        arr[index] = second_value
        arr[index + 1] = first_value
      end
      index += 1
    end
    break if break_flag
  end

end

array = [5, 3]
bubble_sort!(array)
p array
p array == [3, 5]

array = [6, 2, 7, 1, 4]
bubble_sort!(array)
p array
p array == [1, 2, 4, 6, 7]
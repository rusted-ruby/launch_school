# write a method that takes an array as an argument and yields the array contents to a block
# you should assign block varaibles such that it ignores the first two elements and 
# uses the remaining elements as an array called "raptors"

arr = %w(raven finch hawk eagle)

def yielder(arr)
  yield(arr)
end

yielder(arr) do |_, _, *raptors|
  p raptors
end

# why does that work? its just the splat operator <*>
# that tells the code to treat the variable as an array and assign all remaining elements
# to it
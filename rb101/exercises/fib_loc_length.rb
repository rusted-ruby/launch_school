# write a method that calculates and returns the index of the first fib number that has
# the num of digits specified as an argument. Assume the argument is always >= to 2

# how to do this? Must be some kind of mathematical way you could do it. But the other way
# would be to just brute force calculate all the fib numbers up to that length...

def find_fib_index_by_length(len)
  count = 2
  fib1 = 1
  fib2 = 1
  loop do
    count += 1
    fib_sum = fib1 + fib2
    if fib_sum.digits.size == len
      return count
    end
    fib1 = fib2
    fib2 = fib_sum
  end
end

p find_fib_index_by_length(2)
p find_fib_index_by_length(3)
p find_fib_index_by_length(10)
p find_fib_index_by_length(100)
p find_fib_index_by_length(1000)

# ok, it looks like launch school pretty much solved it the same way I did. 
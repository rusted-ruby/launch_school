# write a method that takes an array of nums and returns the sum of sums of each array subsequence
# assum arrays always have 1 number. 
# sum_of_sums([3, 5, 2]) == (3) + (3 + 5) + (3 + 5 + 2) # -> (21)

=begin
Okay, what to do here??? Need what... Need to do something three times.
  first time: just index 0
  second time: index 0 and 1
  third time; index 0, and 1 and 2
  We could use times, and have three vars: a sum, a count (that increases) and an
  index. within the times, we add up array indicies to the sum until index = count.
  Then each iteration, we increase count
=end

def sum_of_sums(arr)
  count = 1
  sum = 0
  arr.size.times do
    index = 0
    loop do
      break if count == index
      sum += arr[index]
      index += 1
    end
    count += 1
  end
  sum
end

p sum_of_sums([3,5,2])
p sum_of_sums([1,5,7,3])
p sum_of_sums([4])
p sum_of_sums([1,2,3,4,5])
p sum_of_sums([420,4387,99999,0])

=begin
# alright, how did LS do it?_
Few different ways. I have one of them below. The other way uses slice and reduce. What do
they do?
  -slice > returns the specified elements from an array
  -reduce > returns object from operands. In this case, :+ symbol for a sum. 
=end

def sum_of_sums2(arr)
  sum_total = 0
  accumulator = 0
  arr.each do |num|
    accumulator += num
    sum_total += accumulator
  end
  sum_total
end

def sum_of_sums3(arr)
  sum_total = 0
  1.upto(numbers.size) do |count|
    sum_total += numbers.slice(0,count).reduce(:+)
  end
  sum_total
end
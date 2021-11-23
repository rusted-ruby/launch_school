# write a method that returns an array containing all the divisors of a positive integer
# how to do this? need one loop: num is input, denom is each number we try
=begin
1 / 1
2 / 1
2 / 2

=end

def divisors(input)
  out = []
  1.upto(input) do |num|
    out << num if input % num == 0
  end
  out
end

p divisors(1) == [1]
p divisors(7) == [1, 7]
p divisors(12) == [1, 2, 3, 4, 6, 12]
p divisors(98) == [1, 2, 7, 14, 49, 98]
# p divisors(99400891) == [1, 9967, 9973, 99400891] # may take a minute

# how did LS do this? pretty cool actually, they called .select on upto!
# looks like upto without a block returns an Enumerator, so you can call the enumerable
# methods (like select) on it.

def divisors2(input)
  result = 1.upto(input).select do |num|
    input % num == 0
  end
  result
end

p divisors2(1) == [1]
p divisors2(7) == [1, 7]
p divisors2(12) == [1, 2, 3, 4, 6, 12]
p divisors2(98) == [1, 2, 7, 14, 49, 98]

# finally, how can we optimize this? We know that if we have half of a numbers divisors,
# we can get the other half... but how do we know when we have half of a number's 
# divisors? Maybe we do upto(input / 2) instead of upto(input), then process what we have
# in the array?

# can also go from 1 upto the square root of the input... neat little maths trick.

def divisors3(input)
  out_arr = 1.upto(input/2).select do |num|
    input % num == 0
  end
  # here, out array is an array of divisors between 1 and input / 2
  # we can use this info to get the other divisors based on the ones we have already
  out_arr.each do |num|
    out_arr << input / num
  end
  out_arr
end

p divisors2(1) == [1]
p divisors2(7) == [1, 7]
p divisors2(12) == [1, 2, 3, 4, 6, 12]
p divisors2(98) == [1, 2, 7, 14, 49, 98]
p divisors(99400891) == [1, 9967, 9973, 99400891]
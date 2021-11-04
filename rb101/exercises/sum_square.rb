# https://launchschool.com/exercises/ce453287
# compute difference between square of a the sum and sum of the square of first n positive integers.

=begin
input = an integer
output = an integer

two pieces
> first, compute the square of the sum
>>  could do this with an upto loop
> second, comput the sum of the squares
>> could also do this with a times loop
=end

def sum_square_difference(input)
  square_of_sum = 0
  1.upto(input) do |number|
    square_of_sum += number
  end
  square_of_sum = square_of_sum.pow(2)
  sum_of_square = 0
  1.upto(input) do |number|
    sum_of_square += number.pow(2)
  end
  square_of_sum - sum_of_square
end

# could also have done this with one loop. Could have gotten the sum and the sum of the 
# squares at the same time. 

p sum_square_difference(3)
p sum_square_difference(10)
p sum_square_difference(100)
p sum_square_difference(1)
# https://launchschool.com/exercises/7fe5eaf8
=begin
write a method that tells me what kind of triangle we have.
input is three integers (or floats!)
output is as follows
> :equilateral - all three sides are equal
> : scalene - all three sides are of different length
> : isosceles - 2 sides are of equal length
> :invalid = for invalid triangles - defined below
>> sum of two shorter sides must be > than length of longest side
>> all sides must have lengths greater than zero. 

first, create a sorted array of the three inputs - know the array will be from small to large
for invalid triangles - call another method 
  >invalid method 
  > in is array, out is bool (true means its invalid)
  > check to see if 0 lives in array - return true if it does
  > check that ar[0] + arr[1] > arr[2] - return true if it is. 
  >return false if neither of those conditions are met. 

other triangles are easy - 
> check if all array indicies are equal - equilateral
> check if two sides are equal - isoceles.
< else, scaline


Questions:
do I need to account for more than 3 arguments? assume no
Do I need to account for negative numbers? assume no
=end

def triangle(num1, num2, num3)
  # tri_arr is an array of triangle sides sorted from least to greatest in length
  tri_arr = [num1, num2, num3].sort
  return :invalid if invalid?(tri_arr)
  return :equilateral if (tri_arr[0] == tri_arr[1]) && (tri_arr[1] == tri_arr[2])
  return :isoceles if (tri_arr[0] == tri_arr[1]) || (tri_arr[1] == tri_arr[2])
  :scalene
end

def invalid?(tri_arr)
  if tri_arr.include?(0)
    return true
  end
  if (tri_arr[0] + tri_arr[1]) < tri_arr[2]
    return true
  end
  false
end

p triangle(3, 3, 3) #== :equilateral
p triangle(3, 3, 1.5) #== :isosceles
p triangle(3, 4, 5) #== :scalene
p triangle(0, 3, 3) #== :invalid
p triangle(3, 1, 1) #== :invalid
p triangle(1,2,1)

=begin
What did launch school do for this? 
got the largest side using tri_arr.max
used a case statement to return the symbols. 
=end
=begin
https://launchschool.com/exercises/1d04b607
given three angles, return symbols that tell me what kind of triangle we have.
> right = one angle = 90
> obtuse = one angle is over 90
> acute = all three angles are under 90
> invalid: 
>> one of the angles is equal to 0
>> the sum of the angles is over 180

input is three numbers
output is a symbol describing the triangle 
first, put the angles into an array
first define invalid case
> in is the array of angles
> bool value - true = invalid triangle
> use include? to see if there's a 0 angle.
> use sum to see if angle sum is over 180

right is easy - just angle array.include?(90)
acute = make sure all angle array indicies are less than 90 (use &&)
abtuse= make sure one angle is over 90 (use ||)
=end

def triangle(num1, num2, num3)
  angle_arr = [num1, num2, num3]
  if invalid?(angle_arr)
    return :invalid
  elsif angle_arr.include?(90)
    return :right
  elsif angle_arr[0] < 90 && angle_arr[1] < 90 && angle_arr[2] < 90
    return :acute
  elsif angle_arr[0] > 90 || angle_arr[1] > 90 || angle_arr[2] > 90
    return :obtuse
  end
end

def invalid?(arr)
  if arr.include?(0)
    return true
  end
  if arr.sum != 180
    return true
  end
  false
end

p triangle(60, 70, 50) == :acute
p triangle(30, 90, 60) == :right
p triangle(120, 50, 10) == :obtuse
p triangle(0, 90, 90) == :invalid
p triangle(50, 50, 50) == :invalid
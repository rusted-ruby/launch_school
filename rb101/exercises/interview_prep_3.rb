=begin
watch others code pt 2
create a method that takes a positive integer and returns the next biggest number
that can be made with the same digits.

if no larger number can be made, return -1

12 becomes 21
513 becomes 531
9 becomes -1
531 becomes -1

input is an integer
output is an integer, or -1
=end
def bigger_number(number)
  number_array = number.digits.sort.reverse
  bigger_number = number_array.join.to_i
  if bigger_number > number
    bigger_number
  else
    -1
  end
end

p bigger_number(12)
p bigger_number(251)
p bigger_number(4387)
p bigger_number(1)
p bigger_number(531)
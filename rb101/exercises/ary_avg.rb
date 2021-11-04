# Write a method that takes one argument, an array containing integers, and returns 
# the average of all numbers in the array. The array will never be empty and the 
# numbers will always be positive integers. Your result should also be an integer.
# puts average([1, 6]) == 3 # integer division: (1 + 6) / 2 -> 3
# puts average([1, 5, 87, 45, 8, 8]) == 25

def average(ary)
  sum = 0
  ary.each {|val| sum += val}
  sum / ary.size
end

p average([1, 6])
p average([1, 5, 87, 45, 8, 8])
p average([9, 47, 23, 95, 16, 52])
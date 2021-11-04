# double number definition: numbers that are the same number twice: 103103, 420420, 44, etc
# write an argument that returns twice what you passed in, except for double numbers: double
# numbers should just be returned. 

# maybe return it as a string? then you can get the len and split it. 

def twice(num)
  num_str = num.to_s
  length = num_str.length()
  first_half = num_str[(0..(length/2 -1))] 
  second_half = num_str[(length/2..length-1)]
  if first_half == second_half
    return num
  else
    return num * 2
  end
end

p twice(37)
p twice(44)
p twice(334433)
p twice(420420)
p twice(3333)
p twice(33333)
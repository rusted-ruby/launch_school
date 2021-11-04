# write an argument that returns a negative num if you pass in a positive one
# if 0 or a negative num is passed in, return what was passed in.

def negative(num)
  return num if num <= 0
  return num * -1 if num > 0
end

p negative(5)
p negative(-3)
p negative(0)
p negative(4387)

# could also have done this with a tenary operator
def negative2(num)
  num <=0 ? num : -num
end
p negative2(5)
p negative2(-3)
p negative2(0)
p negative2(4387)
# write a method that takes an integer and returns an array of ints in sequence from
# 1 to the arg
# sequence(5) = [1, 2, 3, 4, 5]

def sequence(num)
  count = 1
  arr = []
  num.times do
    arr << count
    count +=1
  end
  arr
end

p sequence(5)
p sequence(10)
p sequence(3)

# could also have done this using a range object

def sequence2(num)
  (1..num).to_a
end
p sequence2(5)
p sequence2(10)
p sequence2(3)

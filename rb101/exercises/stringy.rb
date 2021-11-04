# Write a method that takes one argument, a positive integer, and returns a string of alternating 1s and 0s, always starting with 1. 
# The length of the string should match the given integer.
# stringy(6) == '101010'
def stringy(int)
  count = 1
  string = ""
  int.times do
    if count.odd?
      string << "1"
    else
      string << "0"
    end
    count += 1
  end
  string
end
p stringy(6)
p stringy(9)
p stringy(4)

#could also do this with a tenary operator
def stringy2(int)
  count = 1
  string = ""
  int.times do
    number = count.odd? ? "1" : "0"
    string << number
    count += 1
  end
  string
end
p stringy2(6)
p stringy2(9)
p stringy2(4)
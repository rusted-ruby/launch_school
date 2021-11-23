def compute
  if block_given? 
    yield
  else
    "Does not compute."
  end
end

# write a method that takes an optional block such that you get the following output

p compute { 5 + 3 } == 8
p compute { 'a' + 'b' } == 'ab'
p compute == 'Does not compute.'

# could also have done this too

def compute2
  return "Does not compute." unless block_given?
  yield
end

p compute2 { 5 + 3 } == 8
p compute2 { 'a' + 'b' } == 'ab'
p compute2 == 'Does not compute.'


# now something similar, except you give the method an argument and pass that to the block
def compute3(input)
  return "Does not compute." unless block_given?
  yield(input)
end

p compute3(4) { |num| num * 8 } == 32
p compute3('a') { |let| let + "bc" } == "abc"
p compute3([1,2,3]) { |arr| arr + [4,5,6]} == [1,2,3,4,5,6]
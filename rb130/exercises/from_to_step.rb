=begin

write a range method that does the following:
takes three arguments: start value, end value and step
pass each iteration value to a block

What should be returned by this? I'm just going to do an array of values that we
passed into the block

=end

def step(start_val, end_val, step_val)
  return_arr = []
  current_value = start_val
  while current_value <= end_val do
    yield(current_value)
    return_arr << current_value
    current_value += step_val
  end
  return_arr
end 

# test case
p step(1, 10, 3) { |value| puts "value = #{value}" }
=begin
should output this
value = 1
value = 4
value = 7
value = 10
=end
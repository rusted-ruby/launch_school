# given a string, return an array of substrings
# leading_substrings('xyzzy') == ['x', 'xy', 'xyz', 'xyzz', 'xyzzy']

=begin
This is likely really similar to the sum sums
we could use chars to turn the string into an array of characters.
From there, we could use map on it to return the new array.
Use the same strategy that's in sum sum to build the array pieces. 
Each with index might be more convienient here, since we need the index anyway
We can do that if we just create a net new array in the method and use shovels on it
=end
def leading_substrings(string)
  arr = []
  string_arr = string.chars
  string_arr.each_index do |idx|
    arr << string_arr.slice(0..idx).reduce(:+)
  end
  arr
end
p leading_substrings('abc') 
p leading_substrings('a') 
p leading_substrings('xyzzy')

# ls does it really similarly, except that they don't create an array of chars.
# they just use string indexing to get the values they need: so string[0..index]
# also use the .upto method. So 0.upto(9) do |num| creates a block that you feed the nums
# 0 to 9 to. Another way to do indexing without needing to turn the string to an array.
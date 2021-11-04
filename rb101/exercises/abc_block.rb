# https://launchschool.com/exercises/41e03303

=begin
input is a string
output is a boolean
first, how will we store the spelling block? store it as a nested array
[['b','o'], ['x', 'k']] etc.
Then you can iterate 

initialize the block array
create an uppercae version of the string (case agnostic)
transform the input string into an array of chars
initialize a bool as true
iterate through the chars 
> check to see if the char lives in the block array
>> can do this by flattening the array and calling .include? on the flattened array. 
> if the char lives in the block array, remove the block from the block array
>> use each with index on the block array. obtain sub-arrays with the index. If the char 
>> lives in the sub array, use the index to remove the sub-array
> if the char does not lvie in the block array, change the bool flag to false and break the loop

=end

def block_word?(string)
  char_arr = string.upcase.chars
  block_arr = [
    ['B','O'], ['X', 'K'], ['D','Q'], ['C','P'], ['N','A'], ['G','T'], ['R','E'],
    ['F', 'S'], ['J', 'W'], ['H', 'U'], ['V','I'], ['L','Y'], ['Z','M']
  ]
  bool = true
  char_arr.each do |char|
    if block_arr.flatten.include?(char)
      block_arr.each_index do |idx|
        sub_array = block_arr[idx]
        if sub_array.include?(char)
          block_arr[idx] = []
        end
      end
    else
      bool = false
      return bool
    end
  end
  bool
end

p block_word?('BATCH') #== true
p block_word?('BUTCH') #== false
p block_word?('jest') #== true

=begin
How did launch school solve this?
really elegant
- just had an array of two letter strings
- iterated over the array with none? and called <input string>.count(<two letter block string>)
- count would return how many times letters from the block string lived in the input string
- .none? returns true if no element meets a boolean condition
- the bool condition was if the result of count is >= 2. 
=end
# https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/train/ruby
=begin
Input: a string that will always be lowercase, but may be empty
Output: an array of strings that represent your word "wavified"

wave("bill") = ["Bill", "bIll", "biLl", "bilL"]

how to implement this? 
> handle empty input: just return nothing.
> if input isn't empty
>>transform the input string into an array of characters with the .char method
>>initialize an index counter at zero
>>Call map on the new array of characters - makes sense because we want to create a new array
>>create a copy of the input string within the do block created with map. Do this so we don't mutate the input string
>>set the character at the index position of the input string to be an uppercase version of the character we've passed to the do block
>>increment the index counter
>>return the input string with one uppercase char to be added to the new array.
=end

def wave(input)
  if input == ""
    return []
  end
  char_array = input.chars
  index = 0
  char_array.map do |char|
    input_copy = input.dup
    input_copy[index] = char.upcase
    index += 1
    input_copy
  end
end

p wave("bill")
p wave("")
p wave("lets go eberyone")
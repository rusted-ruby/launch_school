# given an array of strings, return substrings that are common to all words

# input is an array of strings
# output is an array of characters. 

=begin
will need to iterate through the input array.
have a hash: key is the word, value is another hash
 sub hash has the letters as keys, and their count as values
 iterate once through the array to create the hash
 iterate through each word to create a count of the characters.
Then we'll have a data structure we can look at.
 How would we compare the hashes to each other to see what we need to return?
 use keys to return an array of the word count hashes
 [{"b" => 1, "e" => 1, "l" => 2, "a" => 1}, {"l" => 2, "a"= > 1, "b" => 1, "e" => 1}, {"r" => 2, "o" => 1, "l" => 2, "e" => 1}]
  iterate through the array of hashes with each.
  find which letters are common among all hashes.
  > start by calling .keys on the first hash in the array. This will be our common characters
  >  iterate throguh the remaining hashes in the array. Create a new check array of keys for each hash
  > iterate through the keys in the new arrays. use the include function to see if the key's exist in the common characters array
  > if they exist in the array, keep the entry i nthe common chars array. if they dont' delete the entry from the common chars array.
  > 
  find the minumim count of those letters across hashes (another iteration)
  use times on those final minimum counts to create our final output array. 
=end

# wow, I completely failed on this one. Took me 30 min and I didn't even start coding yet
# took me 45 and I didn't even have a road map for the rest of the problem

def common_chars_failed(input_arr)
  word_count_hash = {}
  input_arr.each do |word|
    sub_hash = {}
    word.chars.each do |character|
      if sub_hash[character] == nil
        sub_hash[character] = 1
      else
        sub_hash[character] += 1
      end
    end
    word_count_hash[word] = sub_hash
  end
  word_count_array = word_count_hash.values
  # TODO
  common_character_array = find_common_chars(word_count_array)

  out_array = []
  index = 0
  common_character_array.size.times do 

  end
end




=begin
What did we actually end up doing here? 

try something completly different - start with an array of chars from the first array element
Remove the first array element from the input array.
Iterate through the rest of the words in the array
iterate through the characters within each word in the array. 
If the character 

Damn it, the .all? method is what I wanted here. 
Could also use .sub! to switch out a character in a string for something else

Okay, knowing those two methods exist, let's try this again. 

Input is an array full of words 
output is an array of characters that exist in all words
 > if there's a character thats in each word twice, that character should live in the 
  > output array twice.
  
Begin at a word. Iterate through the characters of a word. Check to see if the character
lives in each word in the input array
> easiest way to do this is to shift the array get the first word, then turn it into an
  array of chars and iterate through the chars. 
  Have a flag that defaults to true, but is false if we don't find the word
  > check if the char exists in each word using include?
    if it doesn't exist in a word, then break the loop for that char and go on to the next one
    If it does ixist in all the words, then add it to the end array and remove it from each word in the comparison array.
=end


require "pry-byebug"
def common_chars(input_array)
  first_word = input_array.shift
  out_array = []
  first_word.chars.each do |char|
    found_flag = true
    input_array.each do |word|
      if !word.include?(char)
        found_flag = false
        break
      end
    end
    # binding.pry
    next if !found_flag
    # if we're here, then the word lives in each word left in the array
    out_array << char
    # remove the char from each entry in the input array
    input_array.map! do |word|
      word.sub(char, "")
    end
  end
  out_array
end

p common_chars(["bella", "label", "roller"])
p common_chars(["cool", "lock", "cook"])
p common_chars(["hello", "goodbye", "booya", "random"])




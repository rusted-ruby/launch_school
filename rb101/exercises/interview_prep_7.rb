=begin
watch others code part 5
https://launchschool.com/lessons/3ce27abc/assignments/a3295d50
find the length of the largest substring of a given string that is the same reversed

"i like racecars that go fast" returns 7 because of racecar

if length of string is 0, then return value is zero

Questions: 
Do spaces count in a palindrome? so can "race car" count as a palindrome? assume no
What about this though? "car rac" Assume that counts as a palindrome

in is string
out is length of largest substring that's a palindrome
 - empty string should return 0

init var for longest palindrome len to 0
Get all substrings within our string
>reverse the substrings and compare the reverse to the original
>>if reverse == original and length of reverse > longest palindrome length var, store size of that substring in longest palindrome length var
return longest palindrome len var. 

"at home"
a
at
at_
at h
at ho
at hom
at home
t
t_
t h
t ho
t hom
t home

Need to keep track of two things:
outer:
index of string we start on: starts at 0, ends at string.size -1
Inner
length of substring (l): starts at 1 goes up to length of string first iteration, but decreases with each iteration
> define a starting length and an ending length variable
>starting length is always 1
>ending length decreases by 1 with each iteration of the inner loop 
=end
#at home
def longest_palindrome(string)
  if string == ""
    return 0
  end
  longest_palindrome_len = 0
  string_index = 0
  ending_length = string.size
  # index loop
  0.upto((string.size) -1) do |i|
    starting_length = 1
    starting_length.upto(ending_length) do |l|
      substring = string.slice(i,l)
      if (substring.reverse == substring) && (substring.size > longest_palindrome_len)
        longest_palindrome_len = substring.size
      end
    end
    ending_length -= 1
  end
  longest_palindrome_len
end

p longest_palindrome("a")#1
p longest_palindrome("I like racecars that go fast")#7
p longest_palindrome("aabaa") #5
p longest_palindrome("aab")#2
p longest_palindrome("baabjkl123454321sfgr") #9
p longest_palindrome("") #0

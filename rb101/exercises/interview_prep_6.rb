# watch others code part 4
# https://launchschool.com/lessons/3ce27abc/assignments/a3295d50

=begin
write a function scramble(str1, str2) that tells you if a portion of str1 can be rearranged
to match str2

Only account for lowercase letters. symbols and such don't need to be included. 

scramble("scriptjava", "javascript") = true
scramble("rkqodlw", "world") = true

input: two strings
Output: boolean

bool is true if elements of the first string can be re-arranged into the second string.
How can we make this happen? 
create an array of all the possible substrings of str1
call arr_1.include?(str2)

scratch all that - we could do this, but it would be really hard.

MUCH easier way: just see if all the characters in string 2 live in string 1. 
Thing to keep in mind is that as characters are found in string 1, you'll need to remove them
from string 1. otherwise, you'll run into trouble when we're plaing with multiple characters

scramble("javaas", "jjss")

assuming I can't mutate the input strings:
create a copy of string 1 to preserve the original
create arrays of chars out of string 2
initialize a bool as true
iterate through the elements of arr2
check if a char exists in arr1
if it does, remove the char from arr1
if it doesn't, set the bool to false and return it. 
=end

def scramble(string1, string2)
  mutable_string1 = string1.dup
  bool = true
  string2.chars.each do |char|
    if mutable_string1.include?(char)
      mutable_string1[mutable_string1.index(char)] = ""
    else
      bool = false
      return bool
    end
  end
  bool
end

p scramble("scriptjava", "javascript") #= true
p scramble("rkqodlw", "world") #= true
p scramble("kataks", "steak") #false
p scramble("cedewaraaossoqqyt", "codewars") #true

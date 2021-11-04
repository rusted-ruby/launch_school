# https://launchschool.com/lessons/3ce27abc/assignments/a3295d50
# watch others code part 4
=begin
given two strings, see if there is a substring that both of the strings share
we only care about substrings that are more than two characters long
substrings are case agnostic
substring_test("something", "fun") = false
substring_test("something", "home") = true
substring_test("BANANA", "banana") = true
substring_test("", "") = false
substring_test("1234567", "541265") = true

input = two strings
output is a boolean value based on if there is a valid substring or not. 
questions: can I mutate the input strings? assume I can.
Question: do substrings need to be continuous? assume yes. 

change the input strings to have their uppercase versions to make the case agnostic.
Create a method that creates an array of all the possible substrings of an input string.
Pass each input string into the substring_getter method: now we have two arrays that contain all the substrings
initialize a boolean flag as false
iterate over the contents of the second array. 
>call arr1.include(<arr2 element>) for each element in arr2.
>If we get a match, set a boolean flag to true
return the boolean flag at the end of iteration

substring_getter method:
input is a string
output is an array of all the possible substrings
"table" 
["ta", "ab", "bl", "le", tab, abl, ble, tabl, able, table]
iterate string.size - 1 times: once per length of substring.
> substring length starts at 2. Goes to string.size. can use .upto method for this
>also need to iterate over the index that we start at (i). initialize starting index as 0
>> start at 0 index. end at the string.size - 2 index
>>we'll need to subtract 1 from our end index with each iteration. 
>sutract 1 from ending index

What will we need to keep track of?
substring length
starting index
ending index


=end

def substring_getter(string)
  substring_array = []
  substring_length = 2
  string_length = string.size
  ending_index = string_length - 2
  substring_length.upto(string_length) do |l|
    starting_index = 0
    starting_index.upto(ending_index) do |i|
      substring_array << string.slice(i, l)
    end
  ending_index -= 1
  end
  substring_array
end

def substring_test(string1, string2)
  string1 = string1.upcase
  string2 = string2.upcase
  substring_arr_1 = substring_getter(string1)
  substring_arr_2 = substring_getter(string2)
  bool = false
  return bool if substring_arr_1 == [] || substring_arr_1 == []
  return bool if string1 == "" || string2 == ""
  substring_arr_2.each do |element|
    if substring_arr_1.include?(element)
      bool = true
      break
    end
  end
  bool
end


p substring_test("something", "fun") #= false
p substring_test("something", "home") #= true
p substring_test("BANANA", "banana") #= true
p substring_test("", "") #= false
p substring_test("1234567", "541265") #= true
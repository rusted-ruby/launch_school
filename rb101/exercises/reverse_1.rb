# write a method that takes a string and returns a new string with the words in reverse order
# puts reverse("Reverse these words") = "words these reverse"
# lets count down backwards from the array
def reverse(string)
  reverse_string = []
  words = string.split
  count = -1
  words.size.times do
    reverse_string.push(words[count])
    count -= 1
  end
reverse_string.join(' ')
end
p reverse("reverse these words please")

# could also have done this - can call reverse on an array object 
def reverse2(str)
  str.split.reverse.join(" ")
end
p reverse2("reverse these words also")
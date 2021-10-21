# write a method that will capitalize the first letter in every word of a string
def titleize(str)
  out_str = ""
  str.split.each do |value|
    out_str << value.capitalize + " "
  end
  out_str.chomp(" ")
end
words = "the flintstones rock"
p titleize(words)

# alt solution!
# this creates a new array containing all the strings with the first char capped
# then join creates a new string with the spaces
p words.split.map {|word| word.capitalize}.join(" ")
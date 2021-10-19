famous_words = "seven years ago..."
string1 = "Four score and " + famous_words
puts "#{string1}"
string2 = "Four score and " << famous_words
puts "#{string2}"

# could also have done this
puts "#{famous_words.prepend("Four score and ")}"
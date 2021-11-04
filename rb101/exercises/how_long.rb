# write a method that takes a string as an argument and returns an array of words appended
# with a space and the word length. 
# word_lengths("cow sheep chicken") == ["cow 3", "sheep 5", "chicken 7"]

def word_lengths(str)
  arr = str.split(" ")
  arr.map do |word|
    length = word.length()
    word = word + " " + length.to_s
  end
end
p word_lengths("cow sheep chicken")
p word_lengths("It ain't easy, is it?")
p word_lengths("Supercalifragilisticexpialidocious")
p word_lengths("")
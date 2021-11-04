# Turn this array into a hash where the names are the keys 
# and the values are the positions in the array.
flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "BamBam"]

flint_hash = {}
flintstones.each_with_index do |value, idx| 
  flint_hash[value] = idx
end
p flint_hash

puts
puts "new problem! - create a hash that tells us the frequency of each letter in this string"
statement = "The Flintstones Rock"
p statement
puts

flint_hash = {}
statement.each_char do |c|
  if flint_hash[c] == nil
    flint_hash[c] = 1
  else
    flint_hash[c] += 1
  end
end
p flint_hash

# alt solution time: creating an array of letters, then using .count on 
# the statement to populate it .
# this one is cool because it doesn't include spaces and the letters are in 
# alphabetical order. 
result = {}
letters = ('A'..'Z').to_a + ('a'..'z').to_a

letters.each do |letter|
  letter_frequency = statement.count(letter)
  result[letter] = letter_frequency if letter_frequency > 0
end
p result
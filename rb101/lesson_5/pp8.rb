# use each to output all the vowels from the strings
hsh = {first: ['the', 'quick'], second: ['brown', 'fox'], third: ['jumped'], fourth: ['over', 'the', 'lazy', 'dog']}
vowels = "aeiouyAEIOUY"
out = []
# we will need two loops here: one for the hash indicies, and one for the array values
# (since we can't tell how long the arrays are)
hsh.each do |k,v|
  v.each do |element|
    out << element.chars.select{|char| vowels.include?(char)}
  end
end
p out.flatten.join
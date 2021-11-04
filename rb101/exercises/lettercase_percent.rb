# https://launchschool.com/exercises/e0500589
=begin
input = string
output = hash: 
> keys are :lowercase, :uppercase and :neither
> values are what percentage of the characters in the input string are upper, lower or neither case

  can assume the string will always have at least one character. 

init our data hash
turn string into an array of chars
iterate through array of chars
> for each char, find out if its uppercase, lowercase or neither
>> use .upcase and .downcase to do this. if char == char.upcase && char == char.downcase, we know its not uppercase or lowercase
>> we can use char == char.upcase and char == char.downcase to sort the other two. 
> store the result in the hash.

calculate the percentage yields of the hash. iterate throug the key value pairs
> change the value of each key from raw count to (rawcount) / string len (float value) * 100
> need to divide by the length of the string as a float, or the percentages won't work
return the percentified hash

Questions: Do I need to make sure the outputs have one decimal place? Assume no.
=end

def letter_percentages(string)
  hash = {:lowercase => 0.0, :uppercase => 0.0, :neither => 0.0}
  string.chars.each do |char|
    if char.upcase == char && char.downcase == char
      hash[:neither] += 1
    elsif char.upcase == char
      hash[:uppercase] += 1
    elsif char.downcase == char
      hash[:lowercase] += 1
    end
  end
  # turn the hash into a percentage value
  denom = string.size.to_f
  hash.each_pair do |k,v|
    hash[k] = (v/denom) * 100
  end
  hash
end

p letter_percentages('abCdef 123') #== { lowercase: 50.0, uppercase: 10.0, neither: 40.0 }
p letter_percentages('AbCd +Ef') #== { lowercase: 37.5, uppercase: 37.5, neither: 25.0 }
p letter_percentages('123') #== { lowercase: 0.0, uppercase: 0.0, neither: 100.0 }
p letter_percentages("letS hAVE soMe FUn w1th Thi5 m3th0D")

=begin
How did LS do this one?

first,  had the raw counts and percentages stored as two different hashes, and outsourced 
calculating the percentages to a method that took the raw count hash.
they also use an <=~> operator that I'm not familair with.  
This is something used with regular expressions. It returns the index of the first substring
that matches a regular expression. so they used it with count
<char_arr>.count { |char| char =~ /[a-z]/}
so the /[a-z]/ and others are regular expressions that evaluate to the lowercase chars,
the uppercase chars and no other chars respectively.
=end
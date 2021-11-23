# we've gotten some encrypted computing pioneers
# they're incrypted using Rot13, which is really easy to break... see if you can do it.

=begin
What do I need to do here?
first, take all the encrypted names into a format that I can interact with... HEREDOC?
preferably, I'd get evertyhing into an array where each element is an encrypted name.
Then I'll iterate on the array and call a decryption method on each element. 

Okay, got my iteration of names... looks like theres a string method called each_line that's
really helpful for this.
Now... how to deal with rot13? ah, it just swaps a letter with the 13th letter after it
in the alphabet. This will be SO easy to do with ascis.

What methods will I need?
  something to get me from char to ascii value => .ord
  something to get me from ascii value to char => .chr
  will also need a method to make it so that the values loop on themselves...

Okay... here's what to do for the decrypt method
  make the output all lowercase. 
  iterate through the characters in the string
  if the character is space, just add it
  if the character isn't space, decrypt it
  decryption = take the chars ascii value and return the value that's 13 away from it in the alphabet
  will need some special incrementation to make sure everything stays from ascii 97 to ascii 122
  97 => 110
  98 => 111
  109 => 122
  110 => 97
  111 => 98
=end
def decrypt(name)
  out = ""
  name.downcase.chars.each do |char|
    if char == " " || char == "-"
      out << char
      next
    end
    char_ascii = char.ord
    if char_ascii == 10 
      next
    elsif char_ascii <= 109
      decrypted_ascii = char_ascii + 13
    elsif char_ascii > 109
      decrypted_ascii = char_ascii - 13
    end
    out << decrypted_ascii.chr
  end
  out.capitalize
end

encrypted_names_string = <<~OUTPUT.chomp
Nqn Ybirynpr
Tenpr Ubccre
Nqryr Tbyqfgvar
Nyna Ghevat
Puneyrf Onoontr
Noqhyynu Zhunzznq ova Zhfn ny-Xujnevmzv
Wbua Ngnanfbss
Ybvf Unvog
Pynhqr Funaaba
Fgrir Wbof
Ovyy Tngrf
Gvz Orearef-Yrr
Fgrir Jbmavnx
Xbaenq Mhfr
Fve Nagbal Ubner
Zneiva Zvafxl
Lhxvuveb Zngfhzbgb
Unllvz Fybavzfxv
Tregehqr Oynapu
OUTPUT
encrypted_names_string.each_line do |name|
  puts "encrypted name: #{name}"
  puts "decrypted name: #{decrypt(name)}"
end
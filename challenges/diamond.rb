=begin 
given a char input, create a diamond like so
for the letter A
  A
for the letter C
  A  
 B B
C   C
 B B
  A

If you did E, then E would be at the corners, etc. 

How many characters will I ned to account for here? Let's assume only uppercase alphabetic

So looking at the test cases, we need to have a class diamond
A ascii is 65
Z ascii is 90

diamond will have two halves of length (char distance to A -1) and one center row
Center row will be (2 * char distance to A) + 1 long

Ugh, need to completely rethink this one...

Two pieces to keep track of: number of spaces in a row
The character that we'll need to print at the end of each row
When we need to print an A

Easiest way to do this will be to create a string with the number of spaces we'll need for 
a given row, then center it based on how long a "row" is going to be. 

=end
require "pry-byebug"
class Diamond
  def self.make_diamond(char)
    distance_from_A = char.ord - 65
    diamond_length = 1 + (2 * distance_from_A)
    num_spaces = 0
    current_char_ascii = 65
    center_row_position = distance_from_A + 1
    out_string = ""
    1.upto(diamond_length) do |row_num|
      # handle the case where we're just printing A. 
      if row_num == 1 || row_num == diamond_length
        string = "A"
        current_char_ascii += 1
        num_spaces += 1
      else
        string = self.get_string(current_char_ascii, num_spaces)
      end

      out_string += string.center(diamond_length) + "\n"

      # get ready for the next iteration
      if row_num >= 2 && row_num < center_row_position
        current_char_ascii += 1
        num_spaces += 2
      elsif row_num == center_row_position
        num_spaces -= 2
        current_char_ascii -= 1
      elsif row_num > center_row_position && row_num <= diamond_length-1
        num_spaces -= 2
        current_char_ascii -= 1
      end
    end
    out_string
  end

  def self.get_string(current_char_ascii, num_spaces)
    current_char_ascii.chr + " " * num_spaces + current_char_ascii.chr
  end
end

puts Diamond::make_diamond("Z")

# okay, how did LS do this?
=begin
I like their style. First they created an array of letters to operate over such that if you
passed in C, the array is 

[A, B, C, B, A]

then they called each with object with an empty array as the object. They created each line 
as a string, and added it to the empty array, then joined the array with newline characters.
=end
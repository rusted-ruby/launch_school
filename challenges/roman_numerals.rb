=begin
Write code that converts modern numbers into roman numerals. Note that you won't need to go 
above 3000.

Review on roman numerals
I = 1
V = 5
X = 10
L = 50
C = 100
D = 500
M = 1000

Converting to something before a given number uses the following system
IV = 4
IX = 9
XL = 40
XC = 90
CD = 400
CM = 900

Seems like the simplest way to do this will be to use remainder / modulo / division of
some kind on the input to get its pieces. So 1998, split it up into pieces of 
1000, 900, 90 and 8. then use pre-defined indicies for each base number to get its
corresponding roman numeral definition. That would be the easiest way to do it, but 
you'd need to manually define ~35 or so roman numerals... 

start with 1998
1998 % 1000 = 998
998 % 100 = 98
98 % 10 = 8

so we'll need a loop.
first iteration - denom is 1000, num is input
while denom !=0
  num % denom = result
  divide denom by 10
  skip to next iteration if mod denom is bigger than num
  number to convert = num - result OR num if there isn't a remainder
  convert number
  converted_array << converted number
end
converted_array.join

=end

class RomanNumeral
  attr_reader :number
  
  NUMERAL_TRANSLATOR = {
    1 => "I", 2 => "II", 3 => "III", 4 => "IV", 5 => "V", 6 => "VI", 7 => "VII", 8 => "VIII",
    9 => "IX", 10 => "X", 20 => "XX", 30 => "XXX", 40 => "XL", 50 => "L", 60 => "LX", 70 => "LXX",
    80 => "LXXX", 90 => "XC", 100 => "C", 200 => "CC", 300 => "CCC", 400 => "CD", 500 => "D", 
    600 => "DC", 700 => "DCC", 800 => "DCCC", 900 => "CM", 1000 => "M", 2000 => "MM", 3000 => "MMM"
  }

  def initialize(input)
    @number = input
  end

  def to_roman
    num = self.number
    denom = 1000
    converted_array = []
    while denom != 0 do
      result = num % denom
      denom /= 10
      next if result == num # skip to the next iteration if num is bigger than denom
      # if result = 0, then there is no remainder: the number we'll need is located 
      # within the translator hash
      # if result does not equal 0, then there is a remainder. subtract the remainder from
      # the numerator to get the building block that lives in the translator.
      if result == 0
        number_to_convert = num
      else
        number_to_convert = num - result
      end
      num = result
      converted_array << NUMERAL_TRANSLATOR[number_to_convert]
    end
    converted_array.join
  end
end

=begin
Okay, so I did this, but I don't like it... how does LS do it?
They do something similar to me, but they define a lot less roman numerals than I do. 
Just 1, 4, 5, 9, 10 and their multiples of ten. Create a hash out of these values

iterate over the hash with keys and values. call divmod on the number to convert
with the numeric versions of the roman numerals. divmod returns [quotient, remainder].
if the quotient is greater than 0, then we add quotient * roman_numeral to the final roman
numeral string. In this way, you can get more than 1 roman numeral added.

3000 => [3, 0] adds 3 * M = MMM
993 => div by 900 is [1, 93] which adds 1 * CM = CM
  then we divmod 93 - first non-zero quotient is 90 => [1,3] which adds XC => CMXC
  finally, divmod 3. first non-zero quotint is with 1 => [3,0], which adds III => CMXCIII

Okay, I get it... pretty sweet. 
=end

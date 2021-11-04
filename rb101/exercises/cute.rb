# degree symbol
require "pry-byebug"
DEGREE = "\xC2\xB0"

#write a method that takes a floating point number thats an angle between 0 and 360
# return a string that represents the angle in degrees, min and sec.
# 1 degree = 60 min and 1 min = 60 sec.

# so the decimal portion of the input represents the minutes. If we get that, we can get the 
# number of minutes by using 60 * decimal.
# then we can take that result and do the same thing for the minutes. 
# maybe we have a sub - method that does that, since its a repetitive operation. 

# challenges to solve.
# > getting the decimals - could probably use mod for this.
# > formatting the output to have leading zeros. Could do this with a series of if statements.
#   but there's got to be something easier...

def dms(degrees)
  min = get_and_multiply_decimals(degrees)
  #binding.pry
  sec = get_and_multiply_decimals(min)
  min = format_number(min)
  sec = format_number(sec)
  format(%(#{degrees.round}#{DEGREE}%02d`%02d"))
end

def get_and_multiply_decimals(input)
  decimals = input % 1
  decimals = (decimals * 60)
end

def format_number(input)
  input = input.floor
  if input == 0 
    "00"
  elsif (0..9).include?(input)
    "0" + input.to_s
  else
    input.to_s
  end
end

p dms(76.73)
p dms(254.6)
p dms(93.034773)


# how did launch school solve this? They used the divmod function, the round function
# and the format function to get te right format. 

# divmod returns an array [q r] where q is quotient and r is remainder.
# so 11.divmod(4) = [2, 3.0]

# format - new things here
# > use %() to enclose strings instead of "" - helps when you have a string with those chars
# > use the %02d to format as a number with two sig figs. the 2 means that the number
# > will have 2 digits, the 0 means the number will be rounded out by zeros.
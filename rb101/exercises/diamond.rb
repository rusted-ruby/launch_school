# https://launchschool.com/exercises/75ff93ae
=begin
Diamond displayer
Will be some string manipulation going on here. 
Width of each string will be N
There has to be a function that can help with this. I know there is.
yup, its called center. 
<string to be centered>.center(<string witdh>, <pad string>)
pad string is space by default

string width is n. 

three pieces
> pad string, print it add 2 * to it, then repeat. Do this n/2 times
> add 2 * to string and print it
> subtract 2 * from string, pad it, then print it. Do this n/2 times.
=end

require "pry-byebug"
def diamond(width)
  unpadded_string ="*"

  #build the top part of the diamond
  (width/2).times do 
    padded_string = unpadded_string.center(width)
    puts padded_string
    unpadded_string += "**"
  end

  #build diamond middle row
  puts unpadded_string

  #build diamond top row
  (width/2).times do
    unpadded_string = unpadded_string[0..(unpadded_string.size - 3)]
    padded_string = unpadded_string.center(width)
    puts padded_string
  end
end

diamond(1)
puts
puts
diamond(3)
puts
puts
diamond(7)
puts
puts
diamond(9)
puts
puts
diamond(69)
puts 
puts
diamond(117)
puts
puts

#just for fun
diamond(2)
puts
puts
diamond(20)

#how did LS do it?
# they have two methods: one to print a row, another to iterate through them. 

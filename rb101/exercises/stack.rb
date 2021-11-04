# https://launchschool.com/exercises/0f677535
=begin
Okay... here we go. 
Register can just be a variable. "Stack" will need to be an array. 
What is going to be the best way to process all of these commands?
Best way will probably be to split the string up into pieces. Can just use split for that.

Store the string as an array of commands. Use the shift command to work your way through 
array. Take the first piece, decide what to do with it, then do it.
What will need to happen
> if its an integer, add it to the register
> if its not an integer, find out what command it is. 
  Seems pretty straightforward. How will we tell if the string is an integer though? Need
  to handle the case when 0 is passed in...
=end
require "pry-byebug"
def minilang(ix)
  ix_array = ix.split
  index = 0
  register = 0
  stack = []
  # iterate through instructions
  ix_array.each do 
    # if its an integer, add it to register
    value = ix_array[index]
    if value.to_i.to_s == value || value =="0"
      register = value.to_i
    elsif value == "PUSH"
      stack << register
    elsif value == "ADD"
      register += stack.pop
    elsif value =="SUB"
      register -= stack.pop
    elsif value == "MULT"
      register *= stack.pop
    elsif value == "DIV"
      register /= stack.pop
    elsif value =="POP"
      register = stack.pop
    elsif value == "MOD"
      register %= stack.pop
    elsif value == "PRINT"
      puts "#{register}"
    else
      puts "ERROR on #{value}"
    end
    #binding.pry
    index += 1
  end
  nil
end
p
# p minilang('PRINT')
# 0
p
p minilang('5 PUSH 3 MULT PRINT')
# 15
p
p minilang('5 PRINT PUSH 3 PRINT ADD PRINT')
# 5
# 3
# 8
p
p minilang('5 PUSH POP PRINT')
# 5
p
p minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT')
=begin
https://launchschool.com/exercises/f3d7f26e
input is a string
output is a bool based on if the parentheses are matched up with each other.
initialize a counter - "(" is +1 and ")" is -1
we can iterate through each character in the string
> if char is "(", add 1 to count
> if char is ")", subtract 1 to count
  if count is negative at any point, then we have a closing parentheses without an opener: break the loop and return false

after iteration, return count == 0
=end

def balanced?(string)
  count = 0
  string.chars.each do |char|
    if char =="("
      count += 1
    elsif char == ")"
      count -= 1
    end
    if count < 0 
      return false
    end
  end
  count == 0
end
p balanced?('What (is) this?') == true
p balanced?('What is) this?') == false
p balanced?('What (is this?') == false
p balanced?('((What) (is this))?') == true
p balanced?('((What)) (is this))?') == false
p balanced?('Hey!') == true
p balanced?(')Hey!(') == false
p balanced?('What ((is))) up(') == false
# write a method that returns true if all chars in the string are upper case

def uppercase?(str)
  str.upcase() == str
end
p uppercase?('t') 
p uppercase?('T')
p uppercase?('Four Score')
p uppercase?('FOUR SCORE')
p uppercase?('4SCORE!')
p uppercase?('')
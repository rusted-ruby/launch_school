
def double_numbers!(numbers)
  counter = 0
  numbers[counter] *= 2
end
num_ary = [1,2,3,4,5]
# looks like num_ary is changed after it passes through this method
# so the important thing is to make sure you initalize a new variable to return 
# from the method if you want your old one to stay the same. 
# ah, but array reassignment is a destructive method though. So this happens because when the 
# method is called, num_ary in the outer scope and numbers in the method scope point
# to the same memory object. when we change numbers with numbers[counter] *= 2, we change
# the underlying memory object. So num_ary in the outer scope has its value changed too.
puts "#{double_numbers!(num_ary)}"
puts "#{num_ary}"
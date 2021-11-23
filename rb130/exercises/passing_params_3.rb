# I have this code, and I need to make the output in a certain format by changing the 
# block that I've passed in.

items = ['apples', 'corn', 'cabbage', 'wheat']

def gather(items)
  puts "Let's start gathering food."
  yield(items)
  puts "We've finished gathering!"
end

# first case
gather(items) do | *items, wheat |
  puts items.join(",")
  puts wheat
end
# Let's start gathering food.
# apples, corn, cabbage
# wheat
# We've finished gathering!

# second case
gather(items) do | apple, *the_c , wheat |
  puts apple
  puts the_c.join(",")
  puts wheat
end
#Let's start gathering food.
#apples
#corn, cabbage
#wheat
#We've finished gathering!

# third case
gather(items) do | apples, *the_rest |
  puts apples
  puts the_rest.join(",")
end
# Let's start gathering food.
# apples
# corn, cabbage, wheat
# We've finished gathering!

# fourth case
gather(items) do | first, second, third, fourth |
  puts first + ", " + second + ", " + third + ", " + "and " + fourth 
end
# Let's start gathering food.
# apples, corn, cabbage, and wheat
# We've finished gathering!
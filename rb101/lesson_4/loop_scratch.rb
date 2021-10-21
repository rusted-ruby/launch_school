def greeting
  puts 'Hello!'
end

number_of_greetings = 2
puts "using times"
number_of_greetings.times do
  greeting()
end
puts
puts "using a while loop"
count = 0 
while count < number_of_greetings 
  greeting()
  count +=1
end

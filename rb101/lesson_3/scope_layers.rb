puts "what will this print?"
puts "one is: one"
puts "two is: two"
puts "three is: three"
def mess_with_vars(one, two, three)
  one = two
  two = three
  three = one
end

one = "one"
two = "two"
three = "three"

mess_with_vars(one, two, three)

puts "one is: #{one}"
puts "two is: #{two}"
puts "three is: #{three}"
puts

puts "what will this print?"
puts "one is: one"
puts "two is: two"
puts "three is: three"
def mess_with_vars(one, two, three)
  one = "two"
  two = "three"
  three = "one"
end

one = "one"
two = "two"
three = "three"

mess_with_vars(one, two, three)

puts "one is: #{one}"
puts "two is: #{two}"
puts "three is: #{three}"
puts

puts "what will this print?"
puts "one is: two"
puts "two is: three"
puts "three is: one"
def mess_with_vars(one, two, three)
  one.gsub!("one","two")
  two.gsub!("two","three")
  three.gsub!("three","one")
end

one = "one"
two = "two"
three = "three"

mess_with_vars(one, two, three)

puts "one is: #{one}"
puts "two is: #{two}"
puts "three is: #{three}"
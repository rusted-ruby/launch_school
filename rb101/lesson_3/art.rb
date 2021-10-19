str = "The Flintstones Rock"
(1..10).each do
  str = str.prepend(" ")
  puts str
end

# could also have done this to preserve the original string
str = "The Flintstones Rock"
10.times {|num| puts (" " * num) + str}
puts str

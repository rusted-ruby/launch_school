items = ['apples', 'corn', 'cabbage', 'wheat']

def gather(items)
  puts "Let's start gathering food."
  yield(items)
  puts "We've finished gathering!"
end

gather(items) do | *first_three, last |
  puts first_three.join(",")
  puts last
end

puts

gather(items) do | first, *next_two, last |
  puts first
  puts next_two.join(",")
  puts last
end

puts

gather(items) do | first, *last |
  puts first
  puts last.join(",")
end

puts

gather(items) do | first, second, third, fourth |
  puts "#{first}, #{second}, #{third} and #{fourth}"
end
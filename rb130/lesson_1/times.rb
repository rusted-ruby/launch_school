def times(input)
  0.upto(input-1) { |number| yield(number)}
  input
end

output = times(5) do |num|
  puts num
end

puts output
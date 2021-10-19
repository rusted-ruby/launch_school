num = 42
rng = (10..100).to_a
rng.each do |x|
  if x == num
    puts "#{num} is in the range!"
    break
  end
end

# could also have done this
puts (10..100).cover?(42)
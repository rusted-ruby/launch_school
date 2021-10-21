# add up all the ages in this hash
ages = { "Herman" => 32, "Lily" => 30, "Grandpa" => 5843, "Eddie" => 10, "Marilyn" => 22, "Spot" => 237 }
sum = 0
ages.each_pair do |key, value|
  sum += value
end
p sum

# alt solutions: 
# each is an alias for each_pair. 
# the <_> tells us that we don't care about the key
total_ages = 0
ages.each { |_,age| total_ages += age }
p total_ages

# .values gives us an array of the hash's values
# .inject acts on enumerables and performs the operation passed in as a symbol on all the elements. 
p ages.values.inject(:+) # => 6174

# new problem!
puts
puts "new problem! remove people from the following hash with an age of 100 or more"
puts 
ages = { "Herman" => 32, "Lily" => 30, "Grandpa" => 402, "Eddie" => 10 }
ages_mod = ages.select do |key, value|
  value < 100
end
p ages_mod
p ages
# could also have used .select! or .keep_if here to modify the original hash.

puts
puts "new problem: pick out the smallest age in the hash"
puts

ages = { "Herman" => 32, "Lily" => 30, "Grandpa" => 5843, "Eddie" => 10, "Marilyn" => 22, "Spot" => 237 }
p ages
p ages.values.min

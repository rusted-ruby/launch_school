ages = { "Herman" => 32, "Lily" => 30, "Grandpa" => 402, "Eddie" => 10 }
puts "is spot's age here?"
puts ages["Spot"] != nil

# could also have done these
puts ages.key?("Spot")
puts ages.include?("Spot")
puts ages.member?("Spot")
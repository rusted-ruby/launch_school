advice = "Few things in life are as important as house training your pet dinosaur."
advice_ary = advice.split
advice_ary[6] = "urgent"
string=""
advice_ary.each do |element|
  string << element + " " 
end
puts string 
# or I could have just done this :p
puts advice.gsub("important","urgent")

puts "how can I see if the word \"Dino\" is in the advice string?"
puts advice.include?("Dino")
# could also have done this
puts advice.match?("Dino")

#time to slice this
# first = advice.slice!("Few things in life are as important as ")
# better way of doing it is 
first = advice.slice!(0, advice.index("house "))
puts first
puts advice


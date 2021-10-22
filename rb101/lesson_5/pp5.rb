# find out the total age of just the male family members
munsters = {
  "Herman" => { "age" => 32, "gender" => "male" },
  "Lily" => { "age" => 30, "gender" => "female" },
  "Grandpa" => { "age" => 402, "gender" => "male" },
  "Eddie" => { "age" => 10, "gender" => "male" },
  "Marilyn" => { "age" => 23, "gender" => "female"}
}
# init a sum variable
# loop through hash with each.

sum = 0
munsters.each_pair do |k,v|
  if v["gender"] == "male"
    sum += v["age"]
  end
end
p sum # should be 444

# can also do this with one line in the loop
sum = 0 
munsters.each_value do |val|
  sum += val["age"] if val["gender"] == "male"
end
p sum
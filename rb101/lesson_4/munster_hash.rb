# given this hash, create a new age_group key to classify each family member as 
# kid (0 - 17), adult (18 - 64) or senior (65+)_
munsters = {
  "Herman" => { "age" => 32, "gender" => "male" },
  "Lily" => { "age" => 30, "gender" => "female" },
  "Grandpa" => { "age" => 402, "gender" => "male" },
  "Eddie" => { "age" => 10, "gender" => "male" },
  "Marilyn" => { "age" => 23, "gender" => "female"}
}

munsters.each_pair do |k, v| 
  age = v["age"]
  if (0..17).include?(age) 
    age_group = "kid"
  elsif (18..64).include?(age)
    age_group = "adult"
  else
    age_group = "senior"
  end
  munsters[k]["age_group"] = age_group
end
p munsters

# could also do this same operation with a case statement.
munsters = {
  "Herman" => { "age" => 32, "gender" => "male" },
  "Lily" => { "age" => 30, "gender" => "female" },
  "Grandpa" => { "age" => 402, "gender" => "male" },
  "Eddie" => { "age" => 10, "gender" => "male" },
  "Marilyn" => { "age" => 23, "gender" => "female"}
}

munsters.each_pair do |k, v| 
  age = v["age"]
  case age
  when (0..17)  then age_group = "kid"
  when (18..64) then age_group = "adult"
  else               age_group = "senior"
  end
  munsters[k]["age group"] = age_group
end
puts 
p munsters
# print out the name, age and gender of each family member
munsters = {
  "Herman" => { "age" => 32, "gender" => "male" },
  "Lily" => { "age" => 30, "gender" => "female" },
  "Grandpa" => { "age" => 402, "gender" => "male" },
  "Eddie" => { "age" => 10, "gender" => "male" },
  "Marilyn" => { "age" => 23, "gender" => "female"}
}
def print_info(hsh)
  hsh.each_pair do |k, v|
    name = k
    age = v["age"]
    gender = v["gender"]
    puts "#{name} is a #{age} old #{gender}."
  end
end
print_info(munsters)
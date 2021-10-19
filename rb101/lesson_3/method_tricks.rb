def tricky_method(a_string_param, an_array_param)
  a_string_param += "rutabaga"
  an_array_param << "rutabaga"
end

my_string = "pumpkins"
my_array = ["pumpkins"]
tricky_method(my_string, my_array)

# what will be output here?
puts "My string looks like this now: #{my_string}" # pumpkins
puts "My array looks like this now: #{my_array}" # [pumkins, rugabega]
puts "this happens because the << method called on the array mutates the underlying object of the caller."
puts "the += operator used on the string does not mutate the object, so my_string is the same before and after the method call"

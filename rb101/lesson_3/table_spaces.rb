#given the below string, return it such that its 40 chars long and its in the 
# center of a bunch of whitespaces
title = "Flintstone Family Members"
len=title.length
spaces_to_add = (40 - len) / 2
space_string = ""
(1..spaces_to_add).each do
  space_string << " "
end
title = title.prepend(space_string)
title << space_string
puts title

# could also have done this
title = "Flintstone Family Members"
puts title.center(40)
[[[1], [2], [3], [4]], [['a'], ['b'], ['c']]].map do |element1|
  element1.each do |element2|
    element2.partition do |element3|
      element3.size > 0
    end 
  end
end
=begin
  
What does this return?
map looks at each arr and returns a new arr
each looks through each element of an arr
partition returns a new arr of form [ [true vals,], [false vals] ]
Each just returns what you give it... so isn't the array going to be the same?
or rather, map will return a new version of 
[[[1], [2], [3], [4]] [['a'], ['b'], ['c']]]
=end

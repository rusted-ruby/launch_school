# return an arr with the colors of fruits and sizes of veggies. 
# sizes should be uppercase and colors should be capitalized
# example output - [["Red", "Green"], "MEDIUM", ["Red", "Green"], ["Orange"], "LARGE"]
hsh = {
  'grape' => {type: 'fruit', colors: ['red', 'green'], size: 'small'},
  'carrot' => {type: 'vegetable', colors: ['orange'], size: 'medium'},
  'apple' => {type: 'fruit', colors: ['red', 'green'], size: 'medium'},
  'apricot' => {type: 'fruit', colors: ['orange'], size: 'medium'},
  'marrow' => {type: 'vegetable', colors: ['green'], size: 'large'},
}
=begin
We can do this with one map statement containing an if else
map over the hash, but only looking at the values, not the keys
=> if type is fruit, have another map statement that transforms the colors into capitalized versions
=> if type is veggie, just return the veggie size in uppercase
=end

arr = hsh.map do |_,v|
  if v[:type] == "vegetable"
    v[:size].upcase
  elsif v[:type] == "fruit"
    v[:colors].map do |color|
      color.capitalize
    end
  end
end
p arr
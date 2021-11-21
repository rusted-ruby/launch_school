=begin
Build your own personal select method. 
Think about what Array#select does...
> takes an array as a calling object and returns a new array
> iterates through each element of an array
> adds the element to the new array if the block passed to select returns a truthy value
=end

def select(array)
  index = 0
  new_arr = []
  while index < array.size
    element = array[index]
    flag = yield(element)
    new_arr << element if flag
    index += 1
  end
  new_arr
end

array = [1,2,3,4,5]
p select(array) {|num| num.odd? }
p select(array) { |num| puts num }
p select(array) {|num| num + 1 }
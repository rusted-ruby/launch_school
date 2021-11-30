# create a max_by method. iterate over a collection. return the element where the block
# returned the largest value. 

def max_by(arr)
  max = nil
  if arr != []
    max_val = yield(arr[0])
  end
  arr.each do |val|
    test_val = yield(val)
    if test_val >= max_val
      max = val
      max_val = test_val
    end
  end
  max
end

p max_by([1, 5, 3]) { |value| value + 2 } #== 5
p max_by([1, 5, 3]) { |value| 9 - value } #== 1
p max_by([1, 5, 3]) { |value| (96 - value).chr } #== 1
p max_by([[1, 2], [3, 4, 5], [6]]) { |value| value.size } #== [3, 4, 5]
p max_by([-7]) { |value| value * 3 } #== -7
p max_by([]) { |value| value + 5 } #== nil
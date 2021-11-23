# write a zipper method - take two arrays as arguments and return another array made up of
# nested two element arrays where element 1 is an element from the first array and element
# 2 is an element from the second array. Can assume both input arrays have the same number
# of elements

def zip(arr1, arr2)
  index = 0
  arr1.map do |element|
    element2 = arr2[index]
    index += 1
    [element, element2]
  end
end

# test case
p zip([1, 2, 3], [4, 5, 6]) == [[1, 4], [2, 5], [3, 6]]
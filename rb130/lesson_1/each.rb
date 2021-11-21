# think about Array#each... what does it do?
# > iterates through the elements of an array.
# > executes a block on each element
# > returns the array

def each(array)
  index = 0
  while index < array.size
    yield(array[index])
    index += 1
  end
  array # > gotta return the array object again
end

puts each([1,2,3,4]) { |element| puts element + 4 }

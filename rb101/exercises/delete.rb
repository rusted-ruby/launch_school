# write a method that takes an array of strings and returns an array of the same string
# values, just with the vowels removed.

# need iterators for this. call map on the first array to look through its contents.
# we'll pass each string to the map block.
# then, turn the string to an array, and call select on it.
# in select, remove the vowels. 
# re-stitch the selected array into a string and return that in the map statement.

VOWELS = ['a','e','i','o','u']

def remove_vowels(arr)
  new_arr = arr.map do |string|
    string_arr = string.chars
    string_arr = string_arr.select do |char|
      !VOWELS.include?(char.downcase)
    end
    string_arr.join
  end
end

p remove_vowels(%w(abcdefghijklmnopqrstuvwxyz)) == %w(bcdfghjklmnpqrstvwxyz)
p remove_vowels(%w(green YELLOW black white)) == %w(grn YLLW blck wht)
p remove_vowels(%w(ABC AEIOU XYZ)) == ['BC', '', 'XYZ']

# how did launch school solve this? Could have also used a map method invocation with
# the string.delete method in the block. string.delete("aeiouAEIOU") would have erased
# all vowels from the string.
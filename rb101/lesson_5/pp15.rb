# write code to return an array that only has hashes where all the integers are even
arr = [{a: [1, 2, 3]}, {b: [2, 4, 6], c: [3, 6], d: [4]}, {e: [8], f: [6, 10]}]

=begin
A condition is key here, so this looks like a job for select. (could also use reject)
So call select on arr, iterate through each element, which is a hash.
Need a condition we can run on the value of the hash to see if each element is even...
Should return true for the arrays with all even integers, and false on the ones with an odd integer
One additional piece of complexity too is that we'll need to iterate through the hashes,
since they're not all of uniform size. 

Use select to make a new hash that only has key value pairs where each value is even
then, just compare the new hash to the old one!

To make this, created a "flag" that is set to false if any of the elements in the inner
hash array are odd.
=end

new_arr = arr.select do |element|
  element_copy = element.select do |k,v|
    even_flag = true
    v.each do |num|
       if num.odd? 
        even_flag = false
       end
    end
    even_flag
  end
  element_copy == element
end
p new_arr

# could also do this much more concisely with .all?
# same as before: loop on select. 
# all returns true if all the elements of a collection satisfy a condition
# need two all loops
# => first one looks over all values of the hash. Need to make sure that all values in the hash
#    only contain even integers
# ==> second one looks in each element in the hash value array to make sure its 
# ==> all even

new_arr2 = arr.select do |element|
  element.all? do |_,v|
    v.all? do |num|
      num.even?
    end
  end
end
p new_arr2
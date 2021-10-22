# write a method that returns a hash where the key is the first item in each sub-array
# and the value is the second item in each sub array
# also, you can't use .to_h
arr = [[:a, 1], ['b', 'two'], ['sea', {c: 3}], [{a: 1, b: 2, c: 3, d: 4}, 'D']]
# expected return value: {:a=>1, "b"=>"two", "sea"=>{:c=>3}, {:a=>1, :b=>2, :c=>3, :d=>4}=>"D"}

=begin
# only need to go two layers deep here: once for the sub arrays and once for each
# element in the sub arrays. We could go deeper, but we don't need to.
# also need to create the new object within the loop, since we can't use .to_h 
# and none of our iteration methods return hash

create an empty hash
one outer each statement to get each of the sub arrays
hash key = sub_array[0] an hash value = sub_array[1]
so we only need one loop. Nice
=end
hsh = {}
arr.each do |element|
  hsh[element[0]] = element[1]
end
p hsh

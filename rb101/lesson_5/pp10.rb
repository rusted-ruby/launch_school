# use map to return an array that is identical to this one, except that each integer has been
# incremented by 1
arr = [{a: 1}, {b: 2, c: 3}, {d: 4, e: 5, f: 6}]

=begin
well, we'll need to start with map. That means we need to return each element of the new arr
we'll likely need a second map loop too. We need to iterate through each sub element,
keeping in mind that the outer map needs that improved sub element returned. 
You can call map on a hash, so that works out nicely, but it'll return an array
so we'll need to handle that... transform it into a hash at the end
=end

new_arr = arr.map do |element|
  element.map do |k, v|
    [k, v+1]
  end.to_h
end
p new_arr

=begin
This works like this
second map returns an array of key value pairs, with 1 incremented. so the second map 
turns arr[1] into [ [:b,3], [:c,4] ]. Then the .to_h at the end turns that array into
{b: 3, c: 4} just like we need. 

Could also solve this by using an inner each block that increments a new hash object,
or with an each_with object method. 
=end

new_arr2 = [{a: 1}, {b: 2, c: 3}, {d: 4, e: 5, f: 6}].map do |hsh|
  incremented_hash = {}
  hsh.each do |key, value|
    incremented_hash[key] = value + 1
  end
  incremented_hash
end
p new_arr2
# => [{:a=>2}, {:b=>3, :c=>4}, {:d=>5, :e=>6, :f=>7}]
a = 2
b = [5, 8]
arr = [a, b] # => [2, [5, 8]]

arr[0] += 2 # => [4, [5, 8]]
arr[1][0] -= a # => [4, [3, 8]]
# what are the final values of A and B?
p a #2
p b # [5,8]
p arr # [4. [3, 8]]

=begin
  Why is b wrong?
  arr[0] += 2 does not change a. it changes arr[0]. In fact, its saying "arr[0] s
  shouldn't be a anymore. Now it should be 2"
  what about b though? arr[1] is b. When we say arr[1][0] -= a, its the same as saying
  b[0] -= a
=end

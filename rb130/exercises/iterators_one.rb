# true for one. if EXACTLY one element returns true, the function returns true. 
# this makes it different from any... since we need exactly one true.
# can we call yield on collect?

def one?(input)
  result_arr = []
  input.each do |element| 
    result_arr << yield(element)
  end
  result_arr.count(true) == 1
end

# tests 
p one?([1, 3, 5, 6]) { |value| value.even? }    # -> true
p one?([1, 3, 5, 7]) { |value| value.odd? }     # -> false
p one?([2, 4, 6, 8]) { |value| value.even? }    # -> false
p one?([1, 3, 5, 7]) { |value| value % 5 == 0 } # -> true
p one?([1, 3, 5, 7]) { |value| true }           # -> false
p one?([1, 3, 5, 7]) { |value| false }          # -> false
p one?([]) { |value| true }                     # -> false

# what did ls do?
# they make use of an each invocation with a block, but they have logic in there to handle 
# only seeing one true

def ls_one?(input)
  seen_one = false
  input.each do |element|
    next unless yield(element)
    return false if seen_one
    seen_one = true
  end
  seen_one
end

p ls_one?([1, 3, 5, 6]) { |value| value.even? }    # -> true
p ls_one?([1, 3, 5, 7]) { |value| value.odd? }     # -> false
p ls_one?([]) { |value| true }                     # -> false
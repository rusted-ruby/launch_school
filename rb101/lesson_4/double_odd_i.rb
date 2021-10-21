# double the numbers with odd indicies
def double_odd_i(ary)
  new_ary = []
  count = 0
  while count < ary.size 
    if count.odd?
      new_ary[count] = ary[count] * 2
    else
      new_ary[count] = ary[count]
    end
    count += 1
  end
  new_ary
end

num_ary = [1, 4, 3, 7, 2, 6]
puts "#{double_odd_i(num_ary)}"
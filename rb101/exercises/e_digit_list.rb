def digit_list(num)
  num.digits.reverse
end
def digit_list_big(num)
  digits = []
  loop do
    num, rem = num.divmod(10)
    puts("num: #{num} and rem: #{rem}")
    digits.unshift(rem)
    puts("#{digits}")
    break if num == 0
  end
  digits
end
puts digit_list(4387) == [4,3,8,7]
puts digit_list_big(4387)
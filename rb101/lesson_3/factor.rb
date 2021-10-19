def factors(number)
  divisor = number
  factors = []
  if number <= 0 
    return factors
  end
  begin
    factors << number / divisor if number % divisor == 0
    divisor -= 1
  end until divisor == 0
  factors
end
p factors(90)
p factors(9)
p factors(12)
p factors(0)
p factors(-9)

# could also have done this via a while loop
def factors2(number)
  divisor = number
  factors = []
  while divisor > 0
    factors << number / divisor if number % divisor == 0
    divisor -= 1
  end
  factors
end
p factors2(90)
p factors2(9)
p factors2(12)
p factors2(0)
p factors2(-9)
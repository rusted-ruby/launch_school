# need to write code that takes three things: loan ammunt (P), APR and loan duration
# and returns three things: the monthly interest rate (j), the loan duration in months (n) and 
# the monthly payment (M)

#what do we need to do here first?
#  collect + validate the three pieces of info we need
#  calculate the values we need (3 of them)
#  ask the user if they want to do this again
def integer?(num)
  num.to_i.to_s == num
end
def float?(num)
  num.to_f.to_s == num
end

puts "hello, welcome to the loan calculator"
loop do 
  # first, get user inputs
  # get the loan amount
  principle = ''
  loan_duration_years = ''
  apr = ''
  loop do 
    puts "what is your loan's principle?"
    principle = gets.chomp
    if float?(principle) || integer?(principle)
      principle = principle.to_f
      break
    else
      puts "invalid value. Please put in a number here"
    end 
  end
  #get the APR
  loop do
    puts "what's the APR on the loan? use percentage terms here"
    apr=gets.chomp
    if float?(apr) || integer?(apr)
      apr=apr.to_f
      break
    else
      puts "that's not a valid entry. Please give me a valid number"
    end
  end
  #get the loan duration
  loop do 
    puts "Whats the loan duration in years?"
    loan_duration_years=gets.chomp
    if float?(loan_duration_years) || integer?(loan_duration_years)
      loan_duration_years = loan_duration_years.to_f
      break
    else
      puts "that's not a valid loan duration. Please give me a real number"
    end
  end

  # now, do stuff with the inputs
  loan_duration_months = loan_duration_years * 12
  mpr = apr / 12
  mpr = mpr / 100
  monthly_payment = principle * (mpr / (1 - (1 + mpr)**-(loan_duration_months)))
  puts "the principle is #{principle}"
  puts "the loan duration in months is #{loan_duration_months}"
  puts "the monthly interest rate is #{mpr * 100}"
  puts "the monthly payment is #{monthly_payment}"
  puts "you will pay back #{monthly_payment * loan_duration_months} over #{loan_duration_years} years"
  puts "they will make $#{(monthly_payment * loan_duration_months) - principle} off of you"
  puts "do you want to do another calculation? Y will do it again"
  answer=gets.chomp
  unless answer == 'Y'
    break
  end
end
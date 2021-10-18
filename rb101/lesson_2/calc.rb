def prompt(message)
  puts("=> #{message}")
end
# make sure our number is a valid integer
def valid_number?(num)
  num.to_f != 0.0 || num == '0'
end
def operation_to_message(op)
  word = case op
  when '1'
    'adding'
  when '2'
     'subtracting'
  when '3'
    'multiplying'
  when '4'
    'dividing'
  end
  prompt "test this out"
  word
end
# get the user name
prompt("Please enter your name: ")
name = ''
loop do
  name = gets.chomp
  if name.empty?
    prompt("please enter your name")
  else
    break
  end
end

prompt("well, hello there #{name}")
loop do
  # get one number
  num1 = ''
  loop do
    prompt("give me one number")
    num1 = gets.chomp
    if valid_number?(num1)
      num1=num1.to_f
      break
    else
      prompt("inappropriate number: please try again")
    end
  end
  # get another number
  num2 = ''
  loop do
    prompt("give me a second number")
    num2 = gets.chomp
    if valid_number?(num2)
      num2=num2.to_f
      break
    else
      prompt("inappropriate number: please try again")
    end
  end
  puts "you typed #{num1} and #{num2}"

  # ask the user what operation they want o nthe two numbers
  op_prompt = <<-MSG
  what operation do you want me to do on these two numbers?
  1) add 
  2) subtract 
  3) multiply 
  4) divide
  MSG
  prompt(op_prompt)
  op = ''
  loop do
    op = gets.chomp
    if %w(1 2 3 4).include?(op) 
      break
    else
      prompt("that's not a valid operator. must choose 1 or 2 or 3 or 4")
    end
  end
  # generate dynamic message to tell the user what we're dooing
  prompt("#{operation_to_message(op)} #{num1} and #{num2}")

  # get the result
  result = case op
           when '1'
             num1 + num2
           when '2'
             num1 - num2
           when '3'
             num1 * num2
           when '4'
             num1 / num2
           end
  prompt("result is #{result}")
  prompt("do you want to perform another calculation? Y to go again")
  ans = gets.chomp
  break unless ans.downcase == 'y'
end
  prompt("thanks for using the calcubator #{name}!")
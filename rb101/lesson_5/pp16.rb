# write a method that returns a UUID of the following format when called with no params
# "f65c57f6-a6aa-17a8-faa1-a67f2dc9fa91"
# do it super randomly. First, sample 1 or 2 to decide if its a number of a letter
# if its a letter, select from the range of lowercase asciis ()
# if its a nunber, select from 1 to 10.
# have a sub method that takes a length as a param and retunrs a randomly generated 
# string of that length. The sub method will to the cool stuff I outline above.

def generate_uuid()
  size_arr = [8,4,4,4,12]
  string_arr = size_arr.map do |length|
    generate_string(length)
  end
  string_arr.join("-")
end

def generate_string(num)
  full_string = ""
  num.times do 
    let_or_num = rand(0..1)
    if let_or_num == 0
      ascii = rand(97..122)
      str = ascii.chr
    else 
      str = rand(0..9).to_s
    end
    full_string << str
  end
  full_string
end

p generate_string(1)
p generate_string(12)
p generate_string(6)
p generate_string(40)
p generate_uuid()
p generate_uuid()
p generate_uuid()
p generate_uuid()
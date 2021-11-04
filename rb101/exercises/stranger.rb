=begin
write a method that takes an array and a hash as arguments. 

greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' })
=> Hello, John Q Doe! Nice to have a Master Plumber around.
=end

name_arr = ['john','q','sample']
job_hsh = {:title => "shadowy", :occupation => "super coder"}

def greetings(arr, hsh)
  name_str = arr.join(" ")
  puts "hello #{name_str}! It sure is good to have a #{hsh[:title]} #{hsh[:occupation]} around!"
end

greetings(name_arr,job_hsh)
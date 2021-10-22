# what will the last three lines output?

a = 'hi'
english_greetings = ['hello', a, 'good morning']

greetings = {
  french: ['bonjour', 'salut', 'allo'],
  english: english_greetings,
  italian: ['buongiorno', 'buonasera', 'ciao']
}

greetings[:english][1] = 'hey' # this line is the kicker
#what happens here?
# engligh_greetings[1] = 'hey'
# a = 'hey'
# so now, a is hey, right?

greetings.each do |language, greeting_list|
  greeting_list.each { |greeting| greeting.upcase! }
end
# now we destructivly modify each value in greetings. 
# so that means these are all HEY, right?

puts a # HEY
puts english_greetings[1] # HEY
puts greetings[:english][1] # HEY

# well, I'm wrong.
puts a # hi
puts english_greetings[1] # HEY
puts greetings[:english][1] # HEY
=begin
Where did I go wrong? 
greetings[:english][1] = 'hey'
a doesn't get changed.
greetings[:english][1] points to a. with the reassignment, I'm just telling it to 
point to something else. 
=end
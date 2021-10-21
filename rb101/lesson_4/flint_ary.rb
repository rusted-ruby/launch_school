# find the index of the first name that starts with Be
flintstones = %w(Fred Barney Wilma Betty BamBam Pebbles)
first_b = nil
flintstones.each_with_index do |val, idx|
  if first_b == nil && val[0..1] == 'Be'
    first_b = idx
  end
end
p first_b

#alt solution:
p flintstones.index{ |name| name[0,2] == "Be"}

puts
puts "new problem: shorten this array so the names are just 3 chars long"
flintstones = %w(Fred Barney Wilma Betty BamBam Pebbles)
p flintstones
puts

p flintstones.map!{|name| name[0,3]}

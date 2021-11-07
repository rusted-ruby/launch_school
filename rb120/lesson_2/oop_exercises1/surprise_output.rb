class Pet
  attr_reader :name

  def initialize (name)
    @name = name.to_s
  end

  def to_s
    "my name is #{@name.upcase}"
  end
end

# at first, this code prints the name in all upcase, but it also mutates the underlying
# @name instance variable so its always going to be uppercase after puts is called.
# need to change to_s so that we're not mutating the underlying value of @name
name = 'Fluffy'
fluffy = Pet.new(name)
puts fluffy.name
puts fluffy
puts fluffy.name
puts name

# weird cases here - what happens?
name = 42
fluffy = Pet.new(name)
name += 1 
puts fluffy.name #=> 43 - NOPE => 42
puts fluffy #=> my name is 43 - NOPE => my name is 42
puts fluffy.name #=> 43 - NOPE => 42
puts name #=> 43 - Nice
=begin
what happened here?
ahhh, I see. name on line 24 is a local variable. We incrememnt that, but we don't increment
the value stored in fluffy's instance variable called @name. They're two distinct things. 
=end
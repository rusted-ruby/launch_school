=begin
https://launchschool.com/exercises/9302dd42
write a program to manage robot factory settings
robots need to have unique(!) names that are randomly generated
robots should also be able to be "rebooted" and have their names reset
okay, lets take a look at the test cass.

So we'll need a robot test class with these methods
initialize, which gets a name
a method to generate a name
a method to reset an existing robot's name

first, what's the regex for ? /^[A-Z]{2}\d{3}$/
two letters and three numbers (from 0 to 9)

Not sure what the seeds in the test are being used for though...
It looks like those are used in conjunction with the rand method - 
whenever you call srand (seed) the system will make sure that the next random
number that's generated is the same 

Need to take the seed value and do two operations with it:
  first, turn it to a number between 0 and 25 - use this to get a letter
    increment to get the second one
  Second, turn it to a number between 0 and 9 - use this to get a number
    increment to get the second one


var = rand
Kernel.srand 70
var2 = rand
var3 = rand
kernel.srand 70
var4 = rand

var4 and var2 will be equal to each other. 

So we'll need some data structure to keep track of what names we've created
And we'll need to remove the names from that data structure once robots are reset
class variable should work... 
=end

class Robot
  @@spent_seeds = []
  @@generated_names = []
  LETTERS = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"].shuffle!
  LETTER_SIZE = 25
  NUMBERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].shuffle!
  NUMBER_SIZE = 9
  attr_reader :name

  def initialize
    @name = generate_name
  end

  def generate_name
    seed = rand
    # if we've used this seed before, find another one
    if !!@@spent_seeds.index(seed)
      seed = rand
    end
    # letter_seed is between 0 and 25
    letter_seed = (LETTER_SIZE * seed).round
    # number seed is between 0 and 9
    number_seed = (NUMBER_SIZE * seed).round

    # just get the random values by indexing in to the arrays for letters and numbers
    new_name = ""
    2.times do
      new_name << LETTERS[letter_seed]
      letter_seed = increment(letter_seed, LETTER_SIZE)
    end
    3.times do 
      new_name << NUMBERS[number_seed].to_s
      number_seed = increment(number_seed, NUMBER_SIZE)
    end
    @@spent_seeds << seed
    @@generated_names << new_name
    new_name
  end

  # makes sure the next value is somwehere between 0 and the size that's passed in.
  def increment(seed, size)
    (seed + 1) % size
  end

  def reset
    old_name = name
    @name = generate_name
    index = @@generated_names.index(old_name)
    @@generated_names.delete_at(index)
    @@spent_seeds.delete_at(index)
  end
end
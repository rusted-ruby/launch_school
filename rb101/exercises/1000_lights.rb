# https://launchschool.com/exercises/61d687f4
=begin
Sounds like a doozy... how to do this one?
input = number of switches, but also equals number of reps.
in = an integer. Out = an array that tells you what light switches are on.
Could do something like this
  > array to represent the lights of size N. All are set to "OFF"
  > n.size times, call map! to mutate the swtich array.
  >> keep a count of what index we're on. Start at 1
  >> could use each_index for looping and use shovel to mutate the arr.
  >> if the index is divisible by the current count, call a submethod to change its value.
  > after n.size times, create a new arrray with the indicies of the "ON" values
  >> create new blank array 
  >> call each_index on the array of switch statuses
  >> add the index to the blank array if switch status[index] = "ON"
=end
require "pry-byebug"
def switch_board(n)
  #initialize the switch_status array. They're all off to start
  switch_status = []
  n.times do 
    switch_status << "OFF"
  end

  #iterate to get the right switch status
  count = 1
  n.times do
    switch_status.each_index do |idx|
      if (idx+1) % count == 0 
        switch_status[idx] = get_new_status(switch_status[idx])
      end
    end
    count += 1
  end
  #binding.pry
  #now get the indicies of the right switch statuses
  on_indicies = []
  switch_status.each_index do |idx|
    if switch_status[idx] == "ON"
      on_indicies << (idx + 1)
    end
  end
  on_indicies
end

def get_new_status(value)
  if value == "ON"
    "OFF"
  elsif value == "OFF"
    "ON"
  end
end

p switch_board(5)
p switch_board(10)
p switch_board(100)
p switch_board(200)

# how did LS do it?
# they did a hash instead, where the keys were numbers and the values were the status
# that's probably better because then they didn't need to deal with the index offset
# you need to think about with arrays (ie, the first light is in the 0th index, etc).
# they also used a tenary operator to change the status rather than outsourcing it to a
# whole new method using an if - else statement. 
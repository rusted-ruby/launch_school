=begin
Create a clock that is independant of the date. 
need to be able to add and subtract mins from your clock object
two clock objects that rep the same time should be equal to each other
cannot use any build in date or time functionality: just maths. 

Take a look at the test cases. 
need a clock class
need a to_s method to print the time
need an == method 

Maths
  need + (to add minutes)
  need - (to subtract minutes)
  can add or subtract over an hour, but the format will be over 60 min. 
  need to be able to wrap around to midnight. So if you add 60 min to 23:30, should get 00:30
  Can add more than a day's worth of minutes too...

need a constructer
  two arguments possible: one for hour, one for min
  hours will be expressed in military time (24, not 12)

Let's do the easy stuff first - create an instance variable for hours, and one for mins.
Create the constructor, == and to_s methods first... those are easy.

alright... let's get into the tricky stuff
  need to roll over the hours if mins is over 60
  need to roll over the days if mins is over the day limit...
  What's the best way to do this...? 
  I don't think we can handle the over 60 min and under 60 min separatly because we still
  need to worry about day wrapping. IE, adding 20 min to 23:50
  divmod might be able to help us here..
  maybe we keep track of the total minutes of the time... so min + hour * 60
  then we can rebalance if the total mins are greater than a day's worth of mins (24 * 60)
  or less than a day's worth of mins (need to handle that case too).

  two constance => one storing 60, one storing 24
  have a divmod method that works like this. time current + or - time to add / sub
  time.divmod(constant) = [quo, rem]
  if quo is over 0, rebalance based on constant

  Nah, do it in terms of total minutes... that's easier. 
  add / subtract the new mins from the total minutes
  handle the wraparound midnight case
  rebalance the hour + min instance vars as needed
  set the new values of the min and hour instance vars

  Here's how I'm thinking of doing this
  for each math method, just add or sub the operand from total mins
  have a method to handle wraparound cases for each operation - 
    for addition, subtract MINS_IN_DAY for as long as total_min > MINS_IN_DAY
    for subtraction, add MINS_IN_DAY for as long as total_min < 0
  this way, we know that 0 <= total_min <= 1440 when we enter the rebalance method

  Should work

  one last thing - to_s should format the numbers with two places... so 0 hours 
  should be 00

  thing that tripped me up was that creating the clock was a class method - I needed to
  make the class method call the initialization function and return the calling object
  I also needed to make sure that the + and - methods ALSO reutrned the calling object
  by making self the last line of rebalance. otherwise, some other value would be returned.

=end
require "pry-byebug"
class Clock
  MINS_IN_HOUR = 60
  HOURS_IN_DAY = 24
  MINS_IN_DAY = 1440
  attr_accessor :hour, :min, :total_mins

  def self.at(hour, min = 0)
    self.new(hour,min)
  end

  def initialize(hour, min)
    @hour = hour
    @min = min
    set_total_mins
    self
  end

  def to_s
    # pad hour and min with zeros such that there are always two places. 
    "%02d:%02d" % [hour, min]
  end

  def ==(other)
    hour == other.hour && min == other.min
  end

  def -(operand)
    self.total_mins -= operand
    handle_negative_wraparound
    rebalance
  end

  def handle_negative_wraparound
    # if total_mins is negative, add MINS_IN_DAY until it isn't
    # that way, we can code the rebalance method to only work for the positive case
    return unless total_mins < 0
    while total_mins < 0
      self.total_mins += MINS_IN_DAY
    end
  end

  def +(operand)
    #binding.pry
    self.total_mins += operand
    handle_positive_wraparound
    rebalance
  end

  def handle_positive_wraparound
    return unless total_mins > MINS_IN_DAY
    while total_mins > MINS_IN_DAY
      self.total_mins -= MINS_IN_DAY
    end
  end

  def rebalance
    new_hours, new_min = total_mins.divmod(MINS_IN_HOUR)
    # handle case where total_mins is 1440
    new_hours = 0 if new_hours == 24
    self.min = new_min
    self.hour = new_hours
    self
  end

  def set_total_mins
    self.total_mins = min + (hour * MINS_IN_HOUR)
  end
end

=begin
How did LS handle this?
=end

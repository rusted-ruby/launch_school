=begin
Need a class that will create a valid date object out of two inputs: a year and a month
Also need a day method that takes two arguments:a day of the week
and a string specifying where in the month we need to look: first, second, third, fourth, 
fifth, last or teenth. 
note that the case of the strings doesn't matter
the day method will return a date object based on its arguments and the meetup object's 
year and month
the day method should return nil if there's no day in the month / year that meets the
requirements that we pass into it. 
I'll also need to create date objects out of these... that's what we're using here.
Note that the date objects used for assertion are built using a class method called civil

I'll code a spike for this, then look into the Date object to get a better sense of what's 
happening here.

looks like civil creates a date from (<year>, <month>, <day>). We've already got year and 
month, so we just need the day here... 

we have boolean methods we can use with date objects that tell us what day it is. ie, 
date.Monday? will tell us if a given date is a monday
we can also call date.next_day to increment the day. 
We can call date.mon to return the month, 0-12

So... we can have a loop that works like this
init return to nil
init a date object to the first day of the month and year we have.
begin a loop. break when month != @month
  check to see if the date's day matches the day that's passed in. 
  build a hash with string keys for each possible string value
    the first monday we find, set that to the "first" value
    the second monday we find, set that to the "second" value
    the third monday we find, set that to the "third" value
    include two other sub-checks too
      set the "teenth" value when we find the teenth
      set the "last" value each time we find a valid day.
    increment our counter each time we find a day.

that's pretty good from a broad strokes perspective... but it'll still be hard to run 
our dates through each kind of day check (Monday? tuesday? etc) that we want... I wish
we could turn our argument into a method and call that method on our date!!! Wait, I can!
Can make a symbol out of the day and then turn that into a method!

after the first test, what failed? last, teenth and fifth
=end

require 'date'

class Meetup
  attr_accessor :test_date, :test_month, :counter
  TEENTH_DAYS = [13, 14, 15, 16, 17, 18, 19]

  def initialize(year, month)
    @year = year
    @month = month
  end

  def day(day, desc)
    test_date = Date.civil(@year, @month, 1)
    counter = 1
    test_month = @month
    day = process_day(day)
    desc = desc.downcase
    date_hash = {
      "first" => nil, "second" => nil, "third" => nil, "fourth" => nil, "fifth" => nil,
      "last" => nil, "teenth" => nil
    }
    while test_month == @month
      # create a method to call against our date object to see if the date is the day we want
      # these will be the Date#monday? and Date#tuesday? type methods
      # go on to the next date if this isn't the one we're interested in.
      day_checker = test_date.method(day)
      if !day_checker.call
        test_date = test_date.next_day
        test_month = test_date.month
        next
      end

      # if we're here, this date is a day we're interested in. set the hash accordingly
      case counter
      when 1 then date_hash["first"] = test_date
      when 2 then date_hash["second"] = test_date
      when 3 then date_hash["third"] = test_date
      when 4 then date_hash["fourth"] = test_date
      when 5 then date_hash["fifth"] = test_date
      end

      # by the time we're done, this will actually be the last date
      date_hash["last"] = test_date

      # if the numeric day is in the TEENTH_DAYS array, add the date to the teenth key of the hash
      date_hash["teenth"] = test_date if !!TEENTH_DAYS.index(test_date.day)

      # get ready for the next loop
      counter += 1
      test_date = test_date.next_day
      test_month = test_date.month
    end
    date_hash[desc]
  end

  def process_day(day)
    day = day.downcase
    day += "?"
    day.to_sym
  end
end
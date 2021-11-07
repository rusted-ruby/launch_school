class Flight
  attr_accessor :database_handle

  def initialize(flight_number)
    @database_handle = Database.init
    @flight_number = flight_number
  end
end

=begin
What's the problem with this class? We can read (and write) to the database at will. Better
way to do it would probably be attr_reader :database_handle, then only allow instance methods
to write to the database.

Other problem from LS is dependancies. What if you allow access to the database, but then
decide your class doesn't need a database? Then the code that referenced the database would
break if you change the class. 
=end
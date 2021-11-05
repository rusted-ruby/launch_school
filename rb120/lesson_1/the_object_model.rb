#define a module that has a function
module Questions
  def questions
    puts "I have a question"
  end
end

# define a class that mixes in the Questions module
class NinoClass
  include Questions
end

#create a new instance of the class and call the method from the module on it. 
classroom = NinoClass.new
classroom.questions
class Student
  attr_accessor :grade

  def initialize(name, grade = nil)
    @name = name
    @grade = nil
  end
end

ade = Student.new('Adewale')
p ade
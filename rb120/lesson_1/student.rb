class Student
  attr_accessor :name
  attr_writer :grade

  def initialize(n, g)
    self.name = n
    self.grade = g
  end

  def better_grade_than?(other)
    puts self.grade
    puts other.grade
    if self.grade > other.grade
      return true
    end
    false
  end

  protected

  def grade
    @grade
  end
end

joe = Student.new("joe",100)
bob = Student.new("bob",40)

p joe
p bob
puts "well done" if joe.better_grade_than?(bob)
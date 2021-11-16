class Student
  def initialize(name, year)
    @name = name
    @year = year
  end
end

class Graduate < student
  def initialize(name, year, parking)
    @parking = parking
    super(name, year)
  end
end

class Undergraduate < Student
end

# fill in initialize methods for Graduate and Undergraduate such that
# graduates can use on campus parking. undergraduates can't
# both graduates and undergraduates have a name and year
# do this by adding (or altering) no more than 5 LINES OF CODE!
# what did I do?
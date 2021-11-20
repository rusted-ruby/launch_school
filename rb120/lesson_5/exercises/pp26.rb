# does a mixedin module have access to the object's instance variables? 

module TestModule
  def test_method
    @name
    #@attribute - note that this still works - just returns nil. 
  end
end

class TestClass
  include TestModule

  def initialize(name)
    @name = name
  end 
end

test_var = TestClass.new("this is a test")
puts test_var.test_method
# can class methods be private too?

class TestClass
  def initialize(name)
    @name = name
  end

  def instance_method
    self.class.class_method
  end

  private

  def self.class_method
    puts "test this out!"
  end
end

test = TestClass.new("namessss")
test.class.class_method
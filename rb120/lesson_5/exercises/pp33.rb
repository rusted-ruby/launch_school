  # provide an encapsulation example

class TestClass
  attr_reader :name

  def initialize(name)
    @name = name
  end

  def change_name(new_name)
    self.name = new_name
  end

  private

  def name=(new_name)
    if new_name != nil
      @name = new_name
    end
  end
end
class Dog
  def speak
    'bark!'
  end

  def swim
    'swimming!'
  end
end
class Bulldog < Dog
  def swim
    "this dog can't swim!"
  end
end

teddy = Dog.new
puts teddy.speak           # => "bark!"
puts teddy.swim           # => "swimming!"
baby = Bulldog.new
puts "Bulldog ancestors"
puts baby.class.ancestors
puts baby.speak
puts baby.swim
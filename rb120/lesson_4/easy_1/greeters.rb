class Greeting
  def greet(message)
    puts message
  end
end

class Hello < Greeting
  def hi
    greet("Hello")
  end
end

class Goodbye < Greeting
  def bye
    greet("Goodbye")
  end
end

# what happens here? - prints "hello"
hello = Hello.new
hello.hi

# error - no by method for Hello class
hello = Hello.new
#hello.bye

# error - need a parameter but don't pass one in
hello = Hello.new
#hello.greet

# prints out Goodbye
hello = Hello.new
hello.greet("Goodbye")
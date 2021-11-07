=begin
say you have an array of collaborator pet objects within an instance of a person class. 
Could you have a Person instance method that iterates through the pet object 
array and call pet methods on the pet objects from the person class? Let's find out. 

You can do this!
=end 

class Person
  attr_accessor :name, :pets
  def initialize(n)
    @name = n
    @pets = []
  end
  def pet_test
    @pets.each do |pet|
      puts pet
      if pet.class == Dog
        puts pet.fetching
      elsif pet.class == Bird
        puts pet.flying
      end
    end
  end
end

class Dog
  attr_accessor :name
  def fetching
    "I'm fetching the things!"
  end
end

class Bird
  attr_accessor :name
  def flying
    "I'm flying!!!"
  end
end

bob = Person.new("Bob")
mojo = Dog.new
mojo.name = "Mojo"
bird = Bird.new
bird.name = "Betty"
bob.pets << mojo
bob.pets << bird
bob.pet_test

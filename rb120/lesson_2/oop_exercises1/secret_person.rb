class Person
  attr_writer :secret

  def share_secret
    puts "#{self.secret}"
  end

  private

  attr_reader :secret
end
#write a class that will make the following code run
person1 = Person.new
person1.secret = 'Shh.. this is a secret!'
person1.share_secret
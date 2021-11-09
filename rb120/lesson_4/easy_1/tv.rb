class Television
  def self.manufacturer
    # method logic
  end

  def model
    # method logic
  end
end

# what happens here?
tv = Television.new
tv.manufacturer # error - can't call class method on instance
tv.model # do instance method things.

Television.manufacturer # do class method things
Television.model # error - can't call instance methods on a class. 
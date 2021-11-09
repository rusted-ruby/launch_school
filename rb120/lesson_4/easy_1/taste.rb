module Taste
  def flavor(flavor)
    puts "#{flavor}"
  end
end

class Orange
  include Taste
end

class HotSauce
  include Taste
end

# what are the ancestors for the orange and hot sauce classes?

puts "prediction for hot sauce: HotSauce, taste, object"
puts HotSauce.ancestors
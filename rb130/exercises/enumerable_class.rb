# let this new class you're creating implement methods from the enumerable class
# what do they want me to do here? subclass this class from Enumerable?
# or just define basic methods for each of enumerable's methods?

# well, enumerable is a module, not a class... so you'll need to include enumerable, 
# not subclass from it

class Tree
  include Enumerable
  def each

  end
end
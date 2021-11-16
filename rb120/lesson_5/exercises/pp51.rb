# The following is a short description of an application that lets a customer place an order for a meal:

# - A meal always has three meal items: a burger, a side, and drink.
# - For each meal item, the customer must choose an option.
# - The application must compute the total cost of the order.

# 1. Identify the nouns and verbs we need in order to model our classes and methods.
# 2. Create an outline in code (a spike) of the structure of this application.
# 3. Place methods in the appropriate classes to correspond with various verbs.


=begin
Nouns - meal, meal item, cost, option, order
Verbs - choose, compute
=end

class Order
  def initialize
    # choose meal items here. each meal item is an instance var. 
  end 
  def compute_cost; end
end

class MealItem
end

class Burger < MealItem
end

class Side < MealItem
end

class Drink < MealItem
end


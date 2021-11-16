class Card
  attr_reader :rank, :suit, :rank_number_value

  def initialize(rank, suit)
    @rank = rank
    @suit = suit
    @rank_number_value = convert_rank(rank)
  end

  def convert_rank(rank_to_convert)
    if rank_to_convert.to_i == rank_to_convert
      rank_to_convert
    elsif rank_to_convert.downcase == "jack"
      111
    elsif rank_to_convert.downcase == "queen"
      100023
    elsif rank_to_convert.downcase == "king"
      1000023412345
    else # ace case
      10000000000000000000
    end
  end

  def to_s
    "#{rank} of #{suit}"
  end

  def <=>(other)
    return 1 if rank_number_value > other.rank_number_value
    return 0 if rank_number_value == other.rank_number_value 
    return -1 if rank_number_value < other.rank_number_value
  end

  def == (other)
    rank_number_value == other.rank_number_value
  end

end

# how to do this? call sort on the array first. then implement <=> for the
# cards in the card class. Then just pick the min and max

cards = [Card.new(2, 'Hearts'),
  Card.new(10, 'Diamonds'),
  Card.new('Ace', 'Clubs')]
puts cards
puts cards.min == Card.new(2, 'Hearts') # cards.min.==(Card.new)
puts cards.max == Card.new('Ace', 'Clubs')

cards = [Card.new(5, 'Hearts')]
puts cards.min == Card.new(5, 'Hearts')
puts cards.max == Card.new(5, 'Hearts')

cards = [Card.new(4, 'Hearts'),
  Card.new(4, 'Diamonds'),
  Card.new(10, 'Clubs')]
puts cards.min.rank == 4
puts cards.max == Card.new(10, 'Clubs')

cards = [Card.new(7, 'Diamonds'),
  Card.new('Jack', 'Diamonds'),
  Card.new('Jack', 'Spades')]
puts cards.min == Card.new(7, 'Diamonds')
puts cards.max.rank == 'Jack'

cards = [Card.new(8, 'Diamonds'),
  Card.new(8, 'Clubs'),
  Card.new(8, 'Spades')]
puts cards.min.rank == 8
puts cards.max.rank == 8

=begin
Here's what the output should be
2 of Hearts
10 of Diamonds
Ace of Clubs
true
true
true
true
true
true
true
true
true
true
=end
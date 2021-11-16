class Card
  include Comparable
  attr_reader :rank, :suit

  VALUES = { 'Jack' => 11, 'Queen' => 12, 'King' => 13, 'Ace' => 14 }

  def initialize(rank, suit)
    @rank = rank
    @suit = suit
  end

  def to_s
    "#{rank} of #{suit}"
  end

  def value
    VALUES.fetch(rank, rank)
  end

  def <=>(other_card)
    value <=> other_card.value
  end
end

class Deck
  attr_accessor :cards
  RANKS = ((2..10).to_a + %w(Jack Queen King Ace)).freeze
  SUITS = %w(Hearts Clubs Diamonds Spades).freeze
  def initialize
    card_attributes = RANKS.product(SUITS)
    card_array = card_attributes.map do |card|
      rank = card[0]
      suit = card[1]
      Card.new(rank,suit)
    end
    @cards = card_array.shuffle!
  end

  def draw
    drawn_card = @cards.pop
    initialize if @cards == []
    drawn_card
  end
end

class PokerHand
  attr_reader :hand
  def initialize(deck)
    new_hand = []
    5.times { new_hand << deck.draw}
    @hand = new_hand
  end

  def print
    hand.each { |card| puts "#{card}"}
  end

  def evaluate
    case
    when royal_flush?     then 'Royal flush'
    when straight_flush?  then 'Straight flush'
    when four_of_a_kind?  then 'Four of a kind'
    when full_house?      then 'Full house'
    when flush?           then 'Flush'
    when straight?        then 'Straight'
    when three_of_a_kind? then 'Three of a kind'
    when two_pair?        then 'Two pair'
    when pair?            then 'Pair'
    else                       'High card'
    end
  end

  private

  def royal_flush?
    straight_flush? && hand.collect(&:value).sort[0] == 10
  end

  def straight_flush?
    # five cards in sequence of one suit
    straight? && flush?
  end

  def four_of_a_kind?
    # returns true if there are any card values that appear exactly 4 times in the hand.
    card_value_array = hand.collect(&:value)
    card_value_array.any? { |card_value| card_value_array.count(card_value) == 4 }
  end

  def full_house?
    three_of_a_kind? && pair?
  end

  def flush?
    # five cards of the same suit
    hand.collect(&:suit).uniq.size == 1
  end

  def straight?
    # check that each element in the value array is worth 1 less than the next element. 
    sorted_values = hand.collect(&:value).sort
    flag = true
    0.upto(3) do |i|
      flag = sorted_values[i+1] == sorted_values[i] + 1
      break if !flag
    end
    flag
  end

  def three_of_a_kind?
    # returns true if there are any card values that appear exactly 3 times in the hand.
    card_value_array = hand.collect(&:value)
    card_value_array.any? { |card_value| card_value_array.count(card_value) == 3 }
  end

  def two_pair?
    pair? && hand.collect(&:value).uniq.size == 3
  end

  def pair?
    card_value_array = hand.collect(&:value)
    card_value_array.any? { |card_value| card_value_array.count(card_value) == 2 }
  end
end

system "clear"
deck = Deck.new
my_hand = PokerHand.new(deck)
my_hand.print
puts my_hand.evaluate
class Array
  alias_method :draw, :pop
end
# Test that we can identify each PokerHand type.
hand = PokerHand.new([
  Card.new(10,      'Hearts'),
  Card.new('Ace',   'Hearts'),
  Card.new('Queen', 'Hearts'),
  Card.new('King',  'Hearts'),
  Card.new('Jack',  'Hearts')
])
puts hand.evaluate == 'Royal flush'

hand = PokerHand.new([
  Card.new(8,       'Clubs'),
  Card.new(9,       'Clubs'),
  Card.new('Queen', 'Clubs'),
  Card.new(10,      'Clubs'),
  Card.new('Jack',  'Clubs')
])
puts hand.evaluate == 'Straight flush'

hand = PokerHand.new([
  Card.new(3, 'Hearts'),
  Card.new(3, 'Clubs'),
  Card.new(5, 'Diamonds'),
  Card.new(3, 'Spades'),
  Card.new(3, 'Diamonds')
])
puts hand.evaluate == 'Four of a kind'

hand = PokerHand.new([
  Card.new(3, 'Hearts'),
  Card.new(3, 'Clubs'),
  Card.new(5, 'Diamonds'),
  Card.new(3, 'Spades'),
  Card.new(5, 'Hearts')
])
puts hand.evaluate == 'Full house'

hand = PokerHand.new([
  Card.new(10, 'Hearts'),
  Card.new('Ace', 'Hearts'),
  Card.new(2, 'Hearts'),
  Card.new('King', 'Hearts'),
  Card.new(3, 'Hearts')
])
puts hand.evaluate == 'Flush'

hand = PokerHand.new([
  Card.new(8,      'Clubs'),
  Card.new(9,      'Diamonds'),
  Card.new(10,     'Clubs'),
  Card.new(7,      'Hearts'),
  Card.new('Jack', 'Clubs')
])
puts hand.evaluate == 'Straight'

hand = PokerHand.new([
  Card.new('Queen', 'Clubs'),
  Card.new('King',  'Diamonds'),
  Card.new(10,      'Clubs'),
  Card.new('Ace',   'Hearts'),
  Card.new('Jack',  'Clubs')
])
puts hand.evaluate == 'Straight'

hand = PokerHand.new([
  Card.new(3, 'Hearts'),
  Card.new(3, 'Clubs'),
  Card.new(5, 'Diamonds'),
  Card.new(3, 'Spades'),
  Card.new(6, 'Diamonds')
])
puts hand.evaluate == 'Three of a kind'

hand = PokerHand.new([
  Card.new(9, 'Hearts'),
  Card.new(9, 'Clubs'),
  Card.new(5, 'Diamonds'),
  Card.new(8, 'Spades'),
  Card.new(5, 'Hearts')
])
puts hand.evaluate == 'Two pair'

hand = PokerHand.new([
  Card.new(2, 'Hearts'),
  Card.new(9, 'Clubs'),
  Card.new(5, 'Diamonds'),
  Card.new(9, 'Spades'),
  Card.new(3, 'Diamonds')
])
puts hand.evaluate == 'Pair'

hand = PokerHand.new([
  Card.new(2,      'Hearts'),
  Card.new('King', 'Clubs'),
  Card.new(5,      'Diamonds'),
  Card.new(9,      'Spades'),
  Card.new(3,      'Diamonds')
])
puts hand.evaluate == 'High card'
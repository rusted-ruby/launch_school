require "pry-byebug"

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

deck = Deck.new
# p deck
drawn = []
52.times { drawn << deck.draw }
# p drawn
drawn.count { |card| card.rank == 5 } == 4
drawn.count { |card| card.suit == 'Hearts' } == 13

drawn2 = []
52.times { drawn2 << deck.draw }
p drawn != drawn2 # Almost always.
10.times { drawn2 << deck.draw }
p drawn2

=begin
We have a card class, and we want to be able to make a deck class.
deck should have a draw method
deck should shuffle itself upon initialization
deck should reset itself when it runs out of cards. 
=end
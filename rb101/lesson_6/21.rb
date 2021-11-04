=begin
1. Initialize deck
2. Deal cards to player and dealer
3. Player turn: hit or stay
  - repeat until bust or "stay"
4. If player bust, dealer wins.
5. Dealer turn: hit or stay
  - repeat until total >= 17
6. If dealer bust, player wins.
7. Compare cards and declare winner.
=end
FACES = ["king", "queen", "jack"]

def initialize_deck
  deck = [
    2, 2, 2, 2,
    3, 3, 3, 3,
    4, 4, 4, 4,
    5, 5, 5, 5,
    6, 6, 6, 6,
    7, 7, 7, 7,
    8, 8, 8, 8,
    9, 9, 9, 9,
    10, 10, 10, 10,
    "jack", "jack", "jack", "jack",
    "queen", "queen", "queen", "queen",
    "king", "king", "king", "king",
    "ace", "ace", "ace", "ace"
  ]
end

def display_hand(player_hand, player, first_round = false)
  # hide the second card for the dealer if this is the first call
  if first_round && player == "dealer"
    puts player + " has " + player_hand[0].to_s + " and an unknown card."
  else
    player_string = player_hand.join(" and ")
    puts player + " has " + player_string
  end
end

# input here is the deck. Output is an array with two nested arrays: one for the player's
# hand, and one for the dealers. Breaking this off into its own method so the player
# gets a card, then the dealer gets a card, just like real blackjack
def initialize_hands(deck)
  p_hand = []
  d_hand = []
  p_hand = draw_card(p_hand, deck)
  d_hand = draw_card(d_hand, deck)
  p_hand = draw_card(p_hand, deck)
  d_hand = draw_card(d_hand, deck)
  [p_hand, d_hand]
end

# this method takes a random card from the deck, adds it to the hand, then removes it 
# from the deck
def draw_card(hand, deck)
  card = deck.sample
  hand << card
  # delete the card from the deck
  deck.delete_at(deck.index(card))
  hand
end

def players_turn(hand, deck)
  loop do
    puts "hit or stay?"
    puts
    choice = gets.chomp
    puts
    if choice == "hit"
      hand = draw_card(hand, deck)
      display_hand(hand, "player")
      puts "hand value is #{compute_hand_value(hand)}"
      break if busted?(hand)
    elsif choice == "stay"
      break
    else
      puts "invalid choice"
    end
  end
  hand
end

def dealers_turn(hand, deck)
  loop do
    break if compute_hand_value(hand) >= 17
    hand = draw_card(hand, deck)
  end
  hand
end

# returns a bool if the hand's value is over 21
def busted?(hand)
  compute_hand_value(hand) > 21
end

# returns the hand's numeric value
def compute_hand_value(hand)
  # how to handle the value of the hand?
  # first, create a new array. return 1 for aces and 10 for face cards.
  value_array = hand.map do |card|
    if card.to_i == card
      card
    elsif FACES.include?(card)
      10
    elsif card == "ace"
      1
    end
  end

  # handle aces if there's any here.
  if value_array.include?(1)
    # stay in this loop while there are still 1s in the value_array
    while !value_array.index(1).nil?
      test_array = value_array.dup
      test_array[value_array.index(1)] = 11
      # check what the value would be if the ace was worth 11. If its less than 21, then 
      # then change the value array so the ace is worth 11. If its over 21, then we want the
      # ace to be worth 1, so we should break the loop.
      if test_array.sum <= 21
        value_array = test_array.dup
      elsif test_array.sum > 21
        break
      end
    end
  end
  value_array.sum
end

def compute_victory(player_hand, dealer_hand)
  player_hand_value = compute_hand_value(player_hand)
  dealer_hand_value = compute_hand_value(dealer_hand)
  display_hand(player_hand, "player")
  display_hand(dealer_hand, "dealer")
  puts "player hand value is #{player_hand_value} and dealer hand value is #{dealer_hand_value}"
  if player_hand_value > dealer_hand_value
    puts "player wins!"
  elsif player_hand_value < dealer_hand_value
    puts "dealer wins!"
  else
    puts "its a push! dealer wins by default:"
  end
end

# main loop
puts "welcome to abbreviated blackjack!"
loop do
  deck = initialize_deck
  # game loop
  # deal cards to player and dealer
  hands = initialize_hands(deck)
  player_hand = hands[0]
  dealer_hand = hands[1]
  display_hand(dealer_hand, "dealer", true)
  display_hand(player_hand, "player")

  # player loop: hit or stay
  # if player bust, dealer wins
  player_hand = players_turn(player_hand, deck)

  # do dealer things if the player didn't bust
  if !busted?(player_hand)
    dealer_hand = dealers_turn(dealer_hand, deck)
    if busted?(dealer_hand)
      display_hand(dealer_hand, "dealer")
      puts "hand value is #{compute_hand_value(dealer_hand)}"
      puts "dealer busted! the player wins!"
    end
  else
    puts "player busted! the dealer wins!"
  end

  if !busted?(player_hand) && !busted?(dealer_hand)
    compute_victory(player_hand, dealer_hand)
  end
  puts
  puts "put in y to play again"
  ans = gets.chomp
  puts
  break unless ans.upcase == "Y"
end
puts "thanks for playing. Hopefully you didn't lose too much money!"

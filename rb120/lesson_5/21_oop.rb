# TODO - take a look at launch school's implementation and see what they did differently. 
require "pry-byebug"
class Participant
  attr_reader :participant_type

  def initialize(participant_type)
    @participant_type = participant_type
  end
end

class Deck
  TENNERS = ["jack", "queen", "king"]
  attr_accessor :cards

  # rubocop:disable Metrics/MethodLength
  def initialize
    self.cards = [
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
  # rubocop:enable Metrics/MethodLength

  def draw_card
    drawn_card = cards.sample
    remove_card_from_deck(drawn_card)
    drawn_card
  end

  def remove_card_from_deck(card)
    cards.delete_at(cards.index(card))
  end
end

class Hand
  BUST_VALUE = 21
  attr_accessor :cards_in_hand

  def initialize
    self.cards_in_hand = []
  end

  def add_card_to_hand(card)
    cards_in_hand << card
  end

  def calculate_hand_value
    calculate_hand_array_value(cards_in_hand)
  end

  def calculate_hand_array_value(card_array)
    hand_val_and_num_aces = return_raw_card_values(card_array)
    hand_value = hand_val_and_num_aces[0]
    num_aces = hand_val_and_num_aces[1]
    handle_aces(hand_value, num_aces)
  end

  def return_raw_card_values(card_array)
    hand_value = 0
    num_aces = 0
    card_array.each do |card|
      hand_value += card if card.to_i == card
      hand_value += 10 if Deck::TENNERS.include?(card)
      (hand_value += 1) && (num_aces += 1) if card == "ace"
    end
    [hand_value, num_aces]
  end

  def handle_aces(hand_value, num_aces)
    # handle aces - add ten to each ace if we can do it without busting!
    num_aces.times do
      break if (hand_value + 10) > BUST_VALUE
      hand_value += 10
    end
    hand_value
  end

  def busted?
    calculate_hand_array_value(cards_in_hand) > BUST_VALUE
  end

  def return_hand_contents
    cards_in_hand.join(", ")
  end
end

class Game
  attr_reader :dealer, :player
  attr_accessor :dealer_hand, :player_hand, :deck

  def initialize
    @dealer = Participant.new(:dealer)
    @player = Participant.new(:player)
  end

  def start
    display_welcome_message
    game_loop
    display_goodbye_message
  end

  def game_loop
    loop do
      deal_cards
      show_initial_cards
      player_turn
      dealer_turn
      puts return_game_result
      break unless play_again?
      clear_screen
    end
  end

  def clear_screen
    system "clear"
  end

  def display_welcome_message
    puts "welcome to blackjack, with an object oriented twist!"
  end

  def display_goodbye_message
    puts "bye mane. hopefully you didn't lose too much money"
  end

  def play_again?
    puts
    puts 'would you like to play again? "y" for yes, anything else for no'
    choice = gets.chomp
    choice.downcase == 'y'
  end

  def show_initial_cards
    puts
    puts "dealer has #{dealer_hand.cards_in_hand[0]} and an unknown card"
    puts "you have a #{player_hand.cards_in_hand[0]} and a #{player_hand.cards_in_hand[1]}"
    puts "your hand's value is #{player_hand.calculate_hand_value}"
    puts
  end

  def player_turn
    choice_loop(player_hand, player)
    puts
  end

  def dealer_turn
    return if player_hand.busted?
    local_dealer_hand = dealer_hand
    puts "the dealer's hand is " + local_dealer_hand.return_hand_contents
    choice_loop(local_dealer_hand, dealer)
  end

  def choice_loop(current_players_hand, current_player)
    loop do
      break if current_players_hand.busted?
      choice = hit_or_stay?(current_player)
      break if choice == "stay"
      current_players_hand.add_card_to_hand(deck.draw_card)
      puts "the #{current_player.participant_type}'s hand is now " + current_players_hand.return_hand_contents
      puts "the #{current_player.participant_type}'s hand has a value of #{current_players_hand.calculate_hand_value}"
    end
  end

  def return_game_result
    puts
    return handle_busted_case if player_hand.busted? || dealer_hand.busted?
    calculate_winner
  end

  def handle_busted_case
    return "uh oh, you busted. Dealer wins!" if player_hand.busted?
    return "The dealer busted it wide open. You win!" if dealer_hand.busted?
  end

  def calculate_winner
    player_hand_value = player_hand.calculate_hand_value
    dealer_hand_value = dealer_hand.calculate_hand_value
    puts "your hand is worth #{player_hand_value} and the dealer's hand is worth #{dealer_hand_value}"
    if player_hand_value > dealer_hand_value
      "you win! :)"
    elsif dealer_hand_value > player_hand_value
      "the dealer wins :("
    else
      "it is a push. The dealer wins :("
    end
  end

  def hit_or_stay?(current_player)
    return players_choice if current_player.participant_type == :player
    return dealers_choice if current_player.participant_type == :dealer
  end

  def players_choice
    choice = ""
    loop do
      puts "would you like to hit or stay?"
      puts 'type "hit" for hit, or "stay" to stay'
      choice = gets.chomp
      break if ['hit', 'stay'].include?(choice)
      puts "invalid choice"
      puts
    end
    choice
  end

  def dealers_choice
    return "stay" if dealer_hand.calculate_hand_value >= 17
    "hit"
  end

  def deal_cards
    self.deck = Deck.new
    self.player_hand = Hand.new
    self.dealer_hand = Hand.new
    local_deck = deck
    player_hand.add_card_to_hand(local_deck.draw_card)
    dealer_hand.add_card_to_hand(local_deck.draw_card)
    player_hand.add_card_to_hand(local_deck.draw_card)
    dealer_hand.add_card_to_hand(local_deck.draw_card)
  end
end

Game.new.start

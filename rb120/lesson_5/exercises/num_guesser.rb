# create an object oriented number guessing game
# player gets 7 guesses. 

# create a game object
# pick a random number
# track how many guesses a player has left
# get the player's guess
# validate the player's guess.
# tell them if the player's guess is too high or too low. 

class GuessingGame
  attr_reader :range, :secret_number, :initial_number_of_guesses
  attr_accessor :current_choice, :guesses_left

  def initialize(start_of_range, end_of_range)
    @range = (start_of_range..end_of_range)
    @secret_number = nil
    @guesses_left = nil
    @current_choice = nil
    @initial_number_of_guesses = Math.log2(end_of_range - start_of_range).to_i + 1
  end

  def play
    start_new_game
    loop do
      display_guesses_left
      get_and_validate_user_input
      display_outcome_of_guess
      reduce_guesses_left
      break if game_over?
    end
    display_outcome_of_game
  end

  def start_new_game
    @secret_number = range.to_a.sample
    @guesses_left = initial_number_of_guesses
  end

  def display_guesses_left
    puts "you have #{guesses_left} guesses remaining"
  end

  def get_and_validate_user_input
    loop do
      puts "enter a number between #{range.to_a.first} and #{range.to_a.last}: "
      choice = gets.chomp.to_i
      self.current_choice = choice
      break if range.include?(choice)
      puts "invalid guess"
    end
  end

  def display_outcome_of_guess
    if current_choice < secret_number
      puts "Your guess is too low"
    elsif current_choice > secret_number
      puts "your guess is too high"
    elsif current_choice == secret_number
      puts "That's the number!"
    end
    puts
  end

  def reduce_guesses_left
    self.guesses_left -= 1
  end

  def game_over?
    out_of_guesses? || player_guessed_number?
  end

  def out_of_guesses?
    guesses_left == 0
  end

  def player_guessed_number?
    current_choice == secret_number
  end

  def display_outcome_of_game
    if player_guessed_number?
      puts "you won!"
    elsif out_of_guesses?
      puts "You have no more guesses. You lost!"
    end
    puts
  end
end

game = GuessingGame.new(501,1500)
game.play
game = GuessingGame.new(1,3000)
game.play
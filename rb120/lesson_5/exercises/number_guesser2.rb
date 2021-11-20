require "pry-byebug"

class GuessingGame
  attr_reader :num_to_guess, :user_guess, :high_range, :low_range, :guess_limit
  attr_accessor :outcome

  def initialize(low_value, high_value)
    @guess_limit = Math.log2(high_value - low_value).to_i + 1
    @low_range = low_value
    @high_range = high_value
  end

  def play
    @outcome = :lose
    @num_to_guess = (low_range..high_range).to_a.sample
    guess_limit.downto(1) do |current_guess_num|
      puts "You have #{current_guess_num} guesses remaining"
      get_user_guess
      display_result
      break if user_won?
    end
    display_final_message
  end

  def get_user_guess
    choice = ""
    loop do
      puts "Enter a number between #{low_range} and #{high_range}: "
      choice = gets.chomp.to_i
      break if (low_range..high_range).include?(choice)
      puts "sorry, inalid choice"
    end
    @user_guess = choice
  end

  def display_result
    #binding.pry
    if user_guess < num_to_guess
      puts "your guess is too low."
    elsif user_guess > num_to_guess
      puts "your guess is too high."
    elsif user_guess == num_to_guess
      puts "that's the number!"
      self.outcome = :win
    end
  end

  def user_won?
    outcome == :win
  end

  def display_final_message
    if user_won?
      puts "You won!"
    else
      puts "You have no more guesses. You lost!"
    end
  end
end

game = GuessingGame.new(501,1500)
game.play
game = GuessingGame.new(0,3000)
game.play
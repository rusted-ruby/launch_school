# first, define the objects that we'll need for our RPS game
class Player
  attr_accessor :move, :name, :score

  def initialize
    set_name
    @score = 0
  end
end

class Human < Player
  def set_name
    n = nil
    loop do
      puts "what is your name?"
      n = gets.chomp
      break unless n.empty?
      puts "your name can't be empty"
    end
    self.name = n
  end

  def choose
    puts "\nwhat choice do you want to make?"
    choice = nil
    loop do
      puts "please choose rock, paper, scissors, lizard or spock"
      choice = gets.chomp
      break if Move::VALUES.include? choice
      puts "choice is invalid"
    end
    self.move = Move.new(choice)
    puts
  end
end

class Computer < Player
  def set_name
    self.name = ['C3PO', 'Hal', 'Chappie', 'Borg', 'Goddard'].sample
    puts "you'll be playing against #{name} today"
  end

  def choose
    self.move = Move.new(Move::VALUES.sample)
  end
end

class Move
  attr_accessor :value

  VALUES = ['rock', 'paper', 'scissors', 'lizard', 'spock']
  def initialize(value)
    @value = value
  end

  def >(other_move)
    case @value
    when 'rock'
      return rock_won?(other_move)
    when 'paper'
      return paper_won?(other_move)
    when 'scissors'
      return scissors_won?(other_move)
    when 'lizard'
      return lizard_won?(other_move)
    when 'spock'
      return spock_won?(other_move)
    end
    false
  end

  def rock_won?(other_move)
    other_move.value == 'lizard' || other_move.value == 'scissors'
  end

  def paper_won?(other_move)
    other_move.value == 'rock' || other_move.value == 'spock'
  end

  def scissors_won?(other_move)
    other_move.value == 'paper' || other_move.value == 'lizard'
  end

  def lizard_won?(other_move)
    other_move.value == 'spock' || other_move.value == 'paper'
  end

  def spock_won?(other_move)
    other_move.value == 'scissors' || other_move.value == 'rock'
  end
end

# then, create an engine to create the objects and orchestrate their interaction
class RPSGame
  attr_accessor :human, :computer

  WINNING_SCORE = 2
  def initialize
    @human = Human.new
    @computer = Computer.new
  end

  def play
    display_welcome_message
    loop do
      loop do
        # how can we use the same instance method on these objects, since different things need to
        # happen? IE, computer needs to randomly pick one choice and human needs a prompt?
        # we'll need something in the state of the Player objects to tell whos human and whos not.
        make_and_display_choices
        display_match_winner(return_match_winner)
        increment_and_display_score
        break if game_won?
      end
      display_game_winner
      break unless play_again?
    end
    display_goodbye_message
  end

  def make_and_display_choices
    human.choose
    computer.choose
    display_moves
  end

  def increment_and_display_score
    increment_score(return_match_winner)
    display_score
  end

  def increment_score(winner)
    # increment the score unless winner is null (tie case)
    winner.score += 1 unless !winner
  end

  def display_game_winner
    if human.score > computer.score
      puts "#{human.name} has won the game!"
    else
      puts "#{computer.name} has won the game!"
    end
  end

  def game_won?
    (@human.score == WINNING_SCORE) || (@computer.score == WINNING_SCORE)
  end

  def play_again?
    puts "do you want to play again? type 'y' to play again"
    ans = gets.chomp
    if ans.downcase == 'y'
      human.score = 0
      computer.score = 0
      true
    else
      false
    end
  end

  def display_score
    puts "#{human.name} has a score of #{human.score}"
    puts "#{computer.name} has a score of #{computer.score}"
  end

  def display_welcome_message
    puts "Welcome to OO style RPS!!!"
  end

  def display_goodbye_message
    puts "bye mane"
  end

  # don't need to pass anything into this method! Its an instance method of the RPS Game
  # class, so it already has access to the @human and @computer instance variables that
  # are a part of the class.
  def display_match_winner(winner)
    if winner
      puts "#{winner.name} won that match!!!"
    else
      puts "that match was a tie!!!"
    end
  end

  def return_match_winner
    return human if human.move > computer.move
    return computer if computer.move > human.move
    nil
  end

  def display_moves
    puts "#{human.name} chose #{human.move.value}."
    puts "#{computer.name} chose #{computer.move.value}."
  end
end

RPSGame.new.play

require "pry-byebug"
class Board
  attr_reader :squares, :empty_spaces

  INITIAL_MARKER = " "
  WINNING_CONDITIONS = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9], # horizontals
    [1, 4, 7], [2, 5, 8], [3, 6, 9], # verticals
    [1, 5, 9], [3, 5, 7] # diagonals
  ]

  def initialize
    # track board state with an array of sqaure objects
    @squares = {}
    (1..9).each { |key| @squares[key] = Square.new(INITIAL_MARKER) }
    # track which spaces are empty with an array
    @empty_spaces = []
    (1..9).each { |number| @empty_spaces << number }
  end

  def full?
    empty_spaces == []
  end

  def winner_found?
    !!winning_marker
  end

  def winning_marker
    WINNING_CONDITIONS.each do |line|
      # square_array contains the square objects that correspond to the entries in the
      # winning condition sub arrays
      square_array = @squares.select { |k, _v| line.include?(k) }.values
      markers_in_squares = square_array.collect(&:marker)
      unique_markers = markers_in_squares.uniq
      return unique_markers[0] if (unique_markers.size == 1) && (unique_markers[0] != INITIAL_MARKER)
    end
    nil
  end

  def return_square_ai(marker_to_find)
    WINNING_CONDITIONS.each do |line|
      square_array = @squares.select { |k, _v| line.include?(k) }.values
      markers_in_squares = square_array.collect(&:marker)
      if winning_is_imminent(markers_in_squares, marker_to_find)
        square_choice_index = return_empty_square_index(square_array)
        empty_square = square_array[square_choice_index] # square object that's empty
        # return the position of the empty square - aka, the key that the square object is in
        return @squares.key(empty_square)
      end
    end
    nil
  end

  def winning_is_imminent(markers_in_squares, marker_to_find)
    (markers_in_squares.count(marker_to_find) == 2) && (markers_in_squares.count(INITIAL_MARKER) == 1)
  end

  def return_empty_square_index(square_array)
    square_array.index do |square|
      square.marker == INITIAL_MARKER
    end
  end

  def []=(choice, new_marker)
    squares[choice].marker = new_marker
    empty_spaces.delete(choice)
  end

  # rubocop:disable Metrics/AbcSize
  # rubocop:disable Metrics/MethodLength
  def draw
    puts "     |     |"
    puts "  #{@squares[1]}  |  #{@squares[2]}  |  #{@squares[3]}"
    puts "     |     |"
    puts "-----+-----+-----"
    puts "     |     |"
    puts "  #{@squares[4]}  |  #{@squares[5]}  |  #{@squares[6]}"
    puts "     |     |"
    puts "-----+-----+-----"
    puts "     |     |"
    puts "  #{@squares[7]}  |  #{@squares[8]}  |  #{@squares[9]}"
    puts "     |     |"
  end
  # rubocop:enable Metrics/AbcSize
  # rubocop:enable Metrics/MethodLength
end

class Square
  attr_accessor :marker

  def initialize(marker)
    @marker = marker
  end

  def to_s
    marker
  end
end

class Player
  attr_reader :marker

  def initialize(marker)
    @marker = marker
  end
end

class Game
  HUMAN_MARKER = "X"
  COMPUTER_MARKER = "O"
  attr_reader :board, :human, :computer
  attr_accessor :current_player

  # this method controls the game
  def play
    display_welcome_message
    play_game
    display_goodbye_message
  end

  private

  def play_game
    loop do
      begin_game
      display_board
      players_move
      display_board
      display_result
      break unless play_again?
    end
  end

  def players_move
    loop do
      current_player_moves
      break if game_over?
      clear_screen_and_display_board
      alternate_player
    end
  end

  def begin_game
    @board = Board.new # reps the state of the board at any given time
    @human = Player.new(HUMAN_MARKER)
    @computer = Player.new(COMPUTER_MARKER)
    set_first_player
  end

  def set_first_player
    @current_player = [human, computer].sample
    puts "#{current_player.marker} will be going first!"
  end

  def current_player_moves
    human_moves if human_turn?
    computer_moves if computer_turn?
  end

  def human_turn?
    current_player == human
  end

  def computer_turn?
    current_player == computer
  end

  def alternate_player
    return self.current_player = computer if human_turn?
    self.current_player = human if computer_turn?
  end

  def human_moves
    choice = nil
    loop do
      puts "choose an empty square between 1 and 9"
      choice = gets.chomp.to_i
      break if valid_human_choice?(choice)
      puts "sorry, invalid choice"
    end
    board[choice] = human.marker
  end

  def valid_human_choice?(choice)
    (1..9).include?(choice) && board.empty_spaces.include?(choice)
  end

  def computer_moves
    choice = return_computer_choice
    puts "computer chooses square #{choice}"
    board[choice] = computer.marker
  end

  def return_computer_choice
    # need to make computer defensive and offensive.
    board_local = board
    offensive_choice = board_local.return_square_ai(computer.marker)
    defensive_choice = board_local.return_square_ai(human.marker)
    return 5 if board_local.empty_spaces.include?(5)
    return offensive_choice if !!offensive_choice
    return defensive_choice if !!defensive_choice
    board_local.empty_spaces.sample
  end

  def game_over?
    board.full? || board.winner_found?
  end

  def display_result
    winner = board.winning_marker
    if winner
      puts "#{board.winning_marker} has won the game!"
    else
      puts "it is a tie!"
    end
  end

  def play_again?
    puts "do you want to play again? Type y for if yes"
    ans = gets.chomp
    ans.downcase == "y"
  end

  def clear_screen_and_display_board
    clear
    display_board
  end

  def display_board
    puts "you are #{HUMAN_MARKER} and the computer is #{COMPUTER_MARKER}"
    puts
    board.draw
    puts
  end

  def display_welcome_message
    puts "welcome to Tic Tac Toe with an object oriented twist!"
  end

  def display_goodbye_message
    puts "bye mane"
  end

  def clear
    system "clear"
  end
end

Game.new.play

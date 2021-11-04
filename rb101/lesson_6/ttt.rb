=begin
1. Display the initial empty 3x3 board.
2. Ask the user to mark a square.
3. Computer marks a square.
4. Display the updated board state.
5. If winner, display winner.
6. If board is full, display tie.
7. If neither winner nor board is full, go to #2
8. Play again?
9. If yes, go to #1
10. Good bye!

so, the first piece... how can we display the board? just with a bunch of puts. 
for the other piece, start with a hash, keys are the number of the board squares, 
and values are the value of each square. 

So that sounds pretty nice, next the hardest part is going to be deciding who the winner is. 
=end
require "pry-byebug"
def initialize_board
  new_board = {}
  (1..9).each { |num| new_board[num] = " " }
  new_board
end

def display_board(board)
  puts ""
  puts "     |     |   "
  puts "  #{board[1]}  |  #{board[2]}  |  #{board[3]}"
  puts "     |     |   "
  puts "-----+-----+-----"
  puts "     |     |   "
  puts "  #{board[4]}  |  #{board[5]}  |  #{board[6]}"
  puts "     |     |   "
  puts "-----+-----+-----"
  puts "     |     |   "
  puts "  #{board[7]}  |  #{board[8]}  |  #{board[9]}"
  puts "     |     |   "
  puts ""
end

def initialize_winning_conditions
  # keys are nums. values are arrays of sqaures that all need to be Xs or Os to generate
  # a winning condition.
  hsh = {
    1 => [1, 4, 7],
    2 => [2, 5, 8],
    3 => [3, 6, 9],
    4 => [1, 2, 3],
    5 => [4, 5, 6],
    6 => [7, 8, 9],
    7 => [1, 5, 9],
    8 => [3, 5, 7]
  }
  hsh
end

def winner?(board, winning_conditions)
  # for each winning condition, check the values of the board squares.
  # if they're all the same and not spaces, we have a winner!
  winner = ""
  winning_conditions.each_value do |v|
    if board[v[0]] == board[v[1]] && board[v[0]] == board[v[2]] && board[v[0]] != " "
      winner = board[v[0]]
      break
    end
  end
  winner
end

def check_for_winner(board, winning_conditions)
  # returns the winner for a winning condition, "tie" if there's a tie and "" if nothing
  if winner?(board, winning_conditions) == "X"
    puts "the human won!"
    "X"
  elsif winner?(board, winning_conditions) == "O"
    puts "the computer won!"
    "O"
  elsif board_full?(board)
    puts "we have a tie!"
    "tie"
  else
    ""
  end
end

def board_full?(board)
  bool = true
  value = 1
  board.size.times do
    if board[value] == " "
      bool = false
      break
    end
    value += 1
  end
  bool
end

def joiner(arr, separator, last_word)
  len = arr.length
  arr[len - 1] = last_word + " " + arr.last.to_s
  arr.join(separator + " ")
end

def human_choice(board)
  empty_spaces = get_empty_spaces(board)
  loop do
    puts "what square would you like to fill? #{joiner(empty_spaces,",", "or")}"
    ans = gets.chomp.to_i
    if input_valid?(ans, board)
      puts "you chose square #{ans}"
      board[ans] = "X"
      display_board(board)
      break
    elsif (1..9).include?(ans)
      puts "sorry, square #{ans} is already populated"
    else
      puts "invalid input"
    end
  end
end

def get_empty_spaces(board)
  # create a new hash containing the key value pairs of board where the values are empty spaces
  empty_spaces = board.select do |k, v|
    board[k] == " "
  end
  # turn hash to an array of keys
  empty_spaces.keys
end

def find_at_risk_sqaure(offense, board, winning_conditions)
  # get the board's empty spaces.
  empty_spaces = get_empty_spaces(board)

  # for each empty space ,select the winning conditions that contain that empty space.
  empty_spaces.each do |space|
    valid_conditions = winning_conditions.select do |k,v|
      v.include?(space)
    end

    # check to see if the other two positions in the winning condition array have the 
    # offense value. If they do, then the empty space in that winning condition
    # is what should be picked.
    valid_conditions.each_value do |condition|
      non_empty_sqaures = condition.select { |square| board[square] != " " }
      if board[non_empty_sqaures[0]] == board[non_empty_sqaures[1]] && board[non_empty_sqaures[0]] == offense
        square_selection = condition.reject {|square| board[square] != " " }
        return square_selection[0]
        break
      end
    end
  end
  # return nil if we didn't find anything
  nil
end

def computer_choice(board, winning_conditions)
 
  # have the computer block the human from winning
  defense_pick = find_at_risk_sqaure("X", board, winning_conditions)
  # have the computer win if they can
  offense_pick = find_at_risk_sqaure("O", board, winning_conditions)
  if !!offense_pick
    choice = offense_pick
  elsif !!defense_pick
    choice = defense_pick
  # pick 5 if its open. Most adventageous spot.
  elsif board[5] == " "
    choice = 5
  else
    empty_spaces = get_empty_spaces(board)
    choice = empty_spaces.sample
  end
  # binding.pry
  # display computer's choice and set the board.
  puts "computer chose square #{choice}"
  board[choice] = "O"
  display_board(board)
end

def input_valid?(choice, board)
  # make sure that the user choice isn't already populated
  board[choice] == " "
end

def place_piece(board, current_player, winning_conditions)
  if current_player == "human"
    human_choice(board)
  elsif current_player == "computer"
    computer_choice(board, winning_conditions)
  end
end

def alternate_player(current_player)
  if current_player == "human"
    "computer"
  else
    "human"
  end
end

puts "welcome to TTT!"
puts "human is X, computer is O"
winning_conditions = initialize_winning_conditions
# new game loop
loop do

  board = initialize_board
  display_board(board)
  winner = ""
  current_player = ["human", "computer"].sample
  puts "#{current_player} will be going first"

  # in- game loop
  loop do
    # get human + computer choices and display those choices.
    # also check for a winner after each iteration
    place_piece(board, current_player, winning_conditions)
    current_player = alternate_player(current_player)
    winner = check_for_winner(board, winning_conditions)
    break if winner != ""
  end

  # if we have an endgame situation, ask the user if they want to play agian.
  puts "do you want to play again? Y to play again"
  ans = gets.chomp
  break unless ans.upcase == "Y"
end

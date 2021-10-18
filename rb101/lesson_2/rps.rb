def prompt(message)
  puts "=>" + message
end

def win?(first, second, win)
  first = first.to_sym
  win_ary = win[first]
  win_ary.include?(second)
end

def display_results(user, computer, winning_combos)
  if win?(user, computer, winning_combos)
    prompt("you won!")
  elsif win?(computer, user, winning_combos)
    prompt("you lost!")
  else
    prompt("its a tie!")
  end
end

def increment_score(user, computer, winning_combos, score)
  if win?(user, computer, winning_combos)
    score[:human] += 1
  elsif win?(computer, user, winning_combos)
    score[:computer] += 1
  end
end

def display_score(score)
  prompt("score is human: #{score[:human]}, computer: #{score[:computer]}")
end

prompt("welcome to Rock Paper Scissors!")
prompt("this will be a best of three game")
choice_array = %w(rock paper scissors lizard spock)
# each symbol contains an array of the choices it defeats
winning_combos = { :rock => ['scissors', 'lizard'], :paper => ['rock', 'spock'], :scissors => ['paper', 'lizard'], :spock => ['rock', 'scissors'], :lizard => ['spock', 'paper'] }
loop do
  score = { :human => 0, :computer => 0 }
  loop do
    # choose a random choice here
    computer_choice = choice_array.sample
    # get + alidate the user choice
    user_choice = ''
    loop do
      prompt("Please choose one: #{choice_array.join(', ')}")
      user_choice = gets.chomp
      if choice_array.include?(user_choice)
        break
      else
        prompt("that's not a valid value")
      end
    end
    prompt("you chose #{user_choice} and the computer chose #{computer_choice}")
    # get the results
    display_results(user_choice, computer_choice, winning_combos)
    increment_score(user_choice, computer_choice, winning_combos, score)
    display_score(score)
    if score[:human] == 2 || score[:computer] == 2
      break
    end
  end
  if score[:human] > score[:computer]
    prompt("\n")
    prompt("and the human is the winner!")
    prompt("\n")
  else
    prompt("\n")
    prompt("looks like the computer won this time...")
    prompt("\n")
  end
  prompt("do you want to play again? y for yes")
  answer = gets.chomp
  break unless answer == "y"
end
prompt("bye bye!")

FACES = ["king", "queen", "jack"]
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
  # if there's no aces in the value array, just return the sum of the value array. 
  if !value_array.include?(1)
    return value_array.sum
  else
    # handle aces.
    # need to replace a 1 in the value array with 11, then check the value of the hand, 
    # do it again if there are more 1s and the hand value is less than 21 still. 
    # if there are more 1s and the test value is over 21, 
    while value_array.index(1) != nil do
      test_array = value_array.dup
      test_array[value_array.index(1)] = 11
      ## break if there aren't more ones and the test sum is less than 21.
      if test_array.sum <= 21
        value_array = test_array.dup
      elsif test_array.sum > 21
        break
      end
    
    end
    return value_array.sum
  end
end

p compute_hand_value([8,10]) == 18
p compute_hand_value(["queen",9]) == 19
p compute_hand_value([1,1,1,1]) == 14
p compute_hand_value([1,"queen"]) == 21
p compute_hand_value([1,1,8]) == 20
p compute_hand_value([1,1,10]) == 12
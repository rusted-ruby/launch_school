var = [[[1, 2], [3, 4]], [5, 6]].map do |arr|
  arr.map do |el|
    if el.to_s.size == 1    # it's an integer, add one to it
      el + 1
    else                    # it's an array, add one to each individual piece, then return it
      el.map do |n|
        n + 1
      end
    end
  end
  # this map statement is what the outer loop will use
end
p var
# what will this code return?
# [[[2,3], [4,5]], [6,7]]
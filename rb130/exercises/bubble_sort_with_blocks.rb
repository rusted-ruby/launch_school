=begin
earlier, we implemented a bubble sort algorithm to sort arrays. 
We were really rigid in what our algorithm did though. For this assignment, make it so
the array takes a block that decides what sorting happens
for the normal code, it was just <=. that's where the actual sorting happens. Should be 
easy, just yield to the block there instead of using =<. I think the harder part will 
be handling the case where there isn't a block passed in...
=end

def bubble_sort!(array)
  loop do
    swapped = false
    1.upto(array.size - 1) do |index|
      first = array[index  -1] 
      second = array[index]
      if block_given?
        next if yield(first, second)
      else
        next if first <= second
      end
      array[index - 1], array[index] = second, first
      swapped = true
    end

    break unless swapped
  end
  nil
end

array = [5, 3]
bubble_sort!(array)
p array == [3, 5]

array = [5, 3, 7]
bubble_sort!(array) { |first, second| first >= second }
p array == [7, 5, 3]

array = [6, 2, 7, 1, 4]
bubble_sort!(array)
p array == [1, 2, 4, 6, 7]

array = [6, 12, 27, 22, 14]
bubble_sort!(array) { |first, second| (first % 7) <= (second % 7) }
p array == [14, 22, 12, 6, 27]

array = %w(sue Pete alice Tyler rachel Kim bonnie)
bubble_sort!(array)
p array == %w(Kim Pete Tyler alice bonnie rachel sue)

array = %w(sue Pete alice Tyler rachel Kim bonnie)
bubble_sort!(array) { |first, second| first.downcase <= second.downcase }
p array == %w(alice bonnie Kim Pete rachel sue Tyler)
=begin
Find the hamming distance between two DNA strands. Hamming idstance = the number of point
mutations that are present. 

Looks like we need aDNA object. Create a new strand, then the hamming_distance method is 
called on one object, and has another sequence as the argument

Need to do two things:
  => compute the distance between two strands of equal length
  => if one of the strands to compare is longer than the other, cut it down to the shorter
     one's size.

distance function - pretty easy
    use Array#chars to turn the strings into an array of chars
    iterate through one of them using each_with_index
    take the value from a given index for each strand
    if the value isn't equal, increment the hamming distance

strands of equal size might be a little trickier... 
    create an array containing the size of each strand
    call Array#min on the array to get the smaller value
    call slice on each string to get two strings of equal size - yeah this works
=end

class DNA
  attr_reader :seq

  def initialize(seq)
    @seq = seq
  end
  
  def hamming_distance(other_seq)
    size_arr = []
    size_arr[0] = seq.size
    size_arr[1] = other_seq.size
    smallest_size = size_arr.min
    strand1 = seq.slice(0,smallest_size)
    strand2 = other_seq.slice(0, smallest_size)
    compute_hamming_distance(strand1, strand2)
  end

  def compute_hamming_distance(strand1, strand2)
    distance = 0
    strand1.chars.each_with_index do |_, i|
      s1_val = strand1[i]
      s2_val = strand2[i]
      distance += 1 if s1_val != s2_val
    end
    distance
  end
end

# interesting - LS just did this by finding the smaller size and calling times on that
# for iteration... I like that strategy. 
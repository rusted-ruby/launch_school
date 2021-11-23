# first, define the method. This is what will actually convert numbers to base 8
def convert_to_base_8(n)
  n.to_s(8).to_i # replace these two method calls
end

# create a proc out of our method using the <method> method, which creates a Method object.
# then call to_proc on that Method object to turn it into a proc
base8_proc = method("convert_to_base_8").to_proc

# pass our proc object with <&> into map. This will turn the proc into a block, and call
# the block on each element of the calling object.
p [8, 10, 12, 14, 16, 33].map(&base8_proc)

# expected return value - [10, 12, 14, 16, 20, 41]
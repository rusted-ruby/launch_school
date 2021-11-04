# for this one, reverse words that have 5 or more chars
# reverse("walk around the block") = walk dnuora the kcolb

def reverse(string)
  reverse_string = string.split.map do |word|
    if word.size >=5
      word.reverse
    else
      word
    end
  end.join(" ")
end

p reverse("walke around the biggest of sblocks")
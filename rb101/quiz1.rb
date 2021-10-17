
  sentence="test this out please"
  words = sentence.split
  word_lengths = []
  counter = 0
  puts "test this out please"

  while counter < words.size do
    word_lengths << words[counter].length
    puts "#{word_lengths}"
    puts "#{counter}"
    counter += 1
  end
  word_lengths
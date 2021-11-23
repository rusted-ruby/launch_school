file = File.open('sample_text.txt', 'r')
puts file.read.gsub('a', 'e')
file.close
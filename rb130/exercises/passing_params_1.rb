items = ['apples', 'corn', 'cabbage', 'wheat']

def gather(items)
  puts "Let's start gathering food"
  yield(items)
  puts "Nice selection of food we've gathered!"
end

gather(items) do |items|
  items.each do |item|
    puts "we've got #{item}s!"
  end
end

gather(items) do |items|
  puts items.to_s
end

=begin
Mondify the below method so the output of the items argument is left to a block. 

def gather(items)
  puts "Let's start gathering food."
  puts "#{items.join(', ')}"
  puts "Nice selection of food we have gathered!"
end

=end
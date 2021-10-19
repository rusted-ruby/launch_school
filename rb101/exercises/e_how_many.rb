require "pry"
def count_occurrences(array)
  dic = Hash.new
  # iterate through the array to get a count of each value
  array.each do |val|
    #binding.pry
    if dic[val] == nil
      dic[val]=0
    end
    dic[val] += 1
  end

  # now iterate through the hash to print the values.
  dic.each_pair {|k,v| puts "#{k} => #{v}"}
end

def count_again(array)
  oc = {}
  array.uniq.each do |element|
    oc[element] = array.count(element)
  end
  oc.each do |element, count|
    puts "#{element} +> #{count}"
  end
end

vehicles = [
  'car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'motorcycle', 'car', 'truck'
]

count_occurrences(vehicles)
count_again(vehicles)
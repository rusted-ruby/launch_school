def select_fruit(h) 
  new_h = {}
  h.each_pair do |k,v|
    if v == "Fruit"
      new_h[k] = v
    end
  end
  new_h
end

produce = {
  'apple' => 'Fruit',
  'carrot' => 'Vegetable',
  'pear' => 'Fruit',
  'broccoli' => 'Vegetable'
}

puts "#{select_fruit(produce)}" # => {"apple"=>"Fruit", "pear"=>"Fruit"}
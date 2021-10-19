flintstones = { "Fred" => 0, "Wilma" => 1, "Barney" => 2, "Betty" => 3, "BamBam" => 4, "Pebbles" => 5 }
ary = []
flintstones.each_pair do |k,v|
  if k == "Barney" 
    ary[0] = k
    ary[1] = v
    break
  end
end
p ary

p flintstones.assoc("Barney")
